/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#faf3f0',

          primary: '#9f2042',
          secondary: '#fc9fbb',
          tertiary: '#ecdfac',

          'grey-900': '#211103'
        }
      }
    }
  },
  plugins: []
}
