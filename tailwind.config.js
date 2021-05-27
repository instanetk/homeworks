const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  colors: {
    gray: colors.coolGray,
    green: colors.emerald,
    blue: colors.indigo,
    yellow: colors.amber,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        70: '17.4rem',
        84: '21rem',
        88: '22rem',
        97: '24.2rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  corePlugins: {
    backgroundImage: true,
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
