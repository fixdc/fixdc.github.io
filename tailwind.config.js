/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    './public/**/*.html',
    './src/**/*.css',
    'index.html',
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'cool' : ['cool', 'sans-serif'],
      'coolit' : ['coolit', 'sans-serif'],
      'heather' : ['heather', 'sans-serif'],
      'tnanti' : ['tnanti', 'sans-serif'],
    },
    animation: {
  },
  keyframes: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
