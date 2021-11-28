const colors = require('tailwindcss/colors')

module.exports = {
  extends: [],
  purge: { 
    enabled: false,
    content:[ 
      './index.html',
      './docs/**/*.html'
    ],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      green:{
        light: "#d7fdce",
        default: "#5ef939",
        dark: "#166603",
      },
      gray: colors.trueGray,
      yellow: colors.amber,
      lime: colors.lime,
      teal: colors.teal,
      pink: colors.pink,
    },
    extend: {
      backgroundImage: {
        'hero-pattern':"url('..assets/images/hero-pattern.svg')",
       },
       fontFamily :{
        'sansa' :['Rosario', 'sans'],
        'serifa': ['Unna', 'serif']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
