
// Aqui adicionamos novos breakpoints para telas
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     screens: {
//       // 'tablet': '640px',
//       // 'cel': {'max': '400px'}
//     },
//     extend: {
//       colors: {
//         'new-blue': '#243C5A'
//       }
//     },
//   },
//   plugins: [],
// }



const { colors } = require('tailwindcss/defaultTheme')
// Essa linha de cima só precisou pq alteramos uma cor já existente. Se fosse apenas para criar não era necessário

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray, 
          '900': '#999'
        }
      }, 
      spacing: {
        '50': '20rem'
      }
    },
  },
  plugins: [],
}
