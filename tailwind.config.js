module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
    },
    extend: {
      colors: {
        'lapd-blue': '#03055C',
      },
      maxWidth: {
        '1/2': '50%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
