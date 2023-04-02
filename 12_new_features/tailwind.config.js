/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  // darkMode: 'media' ==> ele ativa o dark mode se o sistema operacional do user estiver em dark mode
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

