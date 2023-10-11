/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    container: { center: true, padding: "16px" },
    extend: {
      colors: {
        primary: "#3b34ff",
        secondary: "#ff9d34",
        dark: "#020617",
        pale: "#64748b",
        complement: "#ff8258",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
