/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      'mont': ['Montserrat'],
      'cool': ['cool','sans-serif'],
      'coolit': ['coolit','sans-serif']
      
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

