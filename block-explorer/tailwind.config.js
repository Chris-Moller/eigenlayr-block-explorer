/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:"#root",
  theme: {
    colors: {
      'white': "rbga(255,255,255)",
      'black':  'rgba(0,0,0,0.75)',
      'gray-card':  'rgba(24, 1, 70, 0.521)',
      'blueish': '#27005F',
      'light-purple': '#9da7ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'purple-grad': '#9F55FF',
      'blue-grad': '#5479FF',
      "dark-purple": "#4b03ab",
    },
    extend: {},
  },
  plugins: [],
}
