/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors: {
        chestnut: {
          '50': '#eef3ff',
          '100': '#e0e9ff',
          '200': '#c7d5fe',
          '300': '#a5b9fc',
          '400': '#8193f8',
          '500': '#636ff1',
          '600': '#4647e5',
          '700': '#4644cd',
          '800': '#3030a3',
          '900': '#2e3081',
          '950': '#1b1b4b',
        },
      }
    },
  },
  plugins: [],
}

