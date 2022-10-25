// one shared config for both the lib and the demo

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./demo/index.html", "./src/**/*.{vue,css}", "./demo/**/*.{vue,css}"],
  theme: {
    extend: {
      colors: {
        slave: "#9244ff",
      },
    },
  },
  plugins: [],
};
