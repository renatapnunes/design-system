/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      slate: {
        900: "#0f172a",
        700: "#334155",
        500: "#64748B",
        400: "#94a3b8",
        300: "#cbd5e1",
        50: "#f8fafc",
      },

      "sky-400": "#38bdf8",
      "teal-300": "#5eead4",
      "green-400": "#4ade80",

      "grey-sky": "#cdedfc",
      "grey-teal": "#c8f6ed",
      "grey-green": "#bff0d1",

      transparent: "#d9d9d90",
      "react-color": "#61dafb",
      "red-400": "#f87171",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
