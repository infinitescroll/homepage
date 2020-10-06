# ---- Build stage ----
FROM mhart/alpine-node:12.14.1 AS base
# install node
RUN apk add --no-cache nodejs-current
# set working directory
WORKDIR /root/app
# copy project file
COPY package.json  .
COPY package-lock.json  .
COPY tailwind.config.js  .
COPY postcss.config.js  .

#COPY _build/staging.env ./.env

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0

# install global packages
RUN npm install -g typescript

# install only production node_modules 
RUN npm install --only=production 

# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/app/prod_node_modules ./node_modules

# copy app sources
COPY . .

RUN npm run build

# expose port and define CMD
EXPOSE 3000
CMD npm run start