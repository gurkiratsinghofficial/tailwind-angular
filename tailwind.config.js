module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
