module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      brightness: ["dark"],
      fontWeight: ["dark"],
      borderWidth: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
