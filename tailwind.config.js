/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      fontFamily: {
        'sans': ['Kanit'],
      },
      keyframes: {
        'bounce-ltr': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '15%': {
            transform: 'translateX(-10%)',
          },
          '30%': {
            transform: 'translateX(10%)',
          },
          '45%': {
            transform: 'translateX(-5%)',
          },
          '60%': {
            transform: 'translateX(5%)',
          },
          '75%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'bounce-ltr': 'bounce-ltr 2s ease infinite',
      },
    },
  },
  plugins: [],
}
