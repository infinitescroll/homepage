import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Infinite
          Scrollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
        </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          charset="utf-8"
          version="1.1"
        />
        <meta
          name='description'
          content='Self-sustaining systems for the worlds to come.'
        />
        <meta property="og:site_name" content="Infinite Scroll"></meta>
        <meta property="og:title" content="Infinite Scroll" />
        <meta property="og:url" content="https://infinitescroll.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Self-sustaining systems for the worlds to come."/>
        <meta property="og:image" content="https://infinitescroll.org/og.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://infinitescroll.org/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
