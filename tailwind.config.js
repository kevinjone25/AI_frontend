/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.vue','./components/**/*.vue', './node_modules/preline/preline.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ],
  darkMode: 'media'
}

