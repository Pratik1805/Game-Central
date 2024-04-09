/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'tech': "url('src/assets/images/VR.png')",
        'construct': "url('src/assets/images/wave.svg')",
      },

      colors:{
        'primary': '#000000',
        'secondary': '#FA9021',
        'textColor': '#E87D0E'
      },
      fontFamily:{
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}