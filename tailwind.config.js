/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
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
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
