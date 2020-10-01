module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px", max: "1440px" },
      xl: { min: "1441px" },
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {},
  plugins: [],
};
