module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9f8f4",
        secondary: "#fff",
        accent: "#07a743",
        textOnPrimary: "#787675",
        textOnSecondary: "#222",
      },
    },
  },
  plugins: [],
};
