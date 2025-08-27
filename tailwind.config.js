
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rocksalt:["Rock Salt"],
        popins:["Poppins", "sans-serif"],
        Baloo2:["Baloo Bhai 2"],
        Libre :["Libre Baskerville"],
        Archivo:["Archivo Black"],
        Anton :["Anton"]
      }
    },
  },
  plugins: [],
}
