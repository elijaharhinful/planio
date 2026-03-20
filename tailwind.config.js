/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FBF8F4',
          white: '#FFFFFF',
          dark: '#545748',
          gray: '#666666',
          accent: '#C4956A',
          'accent-hover': '#B8845A',
        }
      },
      fontFamily: {
        serif: ['Marcellus', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['"Homemade Apple"', 'cursive'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}