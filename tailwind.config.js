const colors = require('tailwindcss/colors')
module.exports = {
  extends: [],
  purge:  [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      fontFamily :{
        sans:["Rosario"],
      }
    },
    colors:{
      green:{
        light: "#d7fdce",
        default: "#5ef939",
        dark: "#166603",
      },
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      lime: colors.lime,
      teal: colors.teal,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
