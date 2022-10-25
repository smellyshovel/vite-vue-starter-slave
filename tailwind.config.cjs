// one shared config for both the lib and the demo

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./demo/index.html",
    "./src/**/*.{vue,css}",
    "./demo/**/*.{vue,css}",
    // TODO: list all the slave libs below (using the same pattern)
    // "../vite-vue-starter-slave/src/**/*.{vue,css}",
  ],
  theme: {
    extend: {
      colors: {
        slave: "#9244ff",
      },
    },
  },
  plugins: [],
};
