
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
          dark: '#1A1A1A',
          gray: '#666666',
          accent: '#C4956A',
          'accent-hover': '#B8845A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
