/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        karla:"'Karla', sans-serif",
        OpenSans:"'Open Sans', sans-serif",
        Roboto:"'Roboto', sans-serif"
      },
      screens: {
        'xs': '480px', // Define the 'xs' breakpoint
      },
      backgroundImage: {
        'form-gradient': 'linear-gradient(135deg, #f06c6c, #6c00f0)', // Use the specific colors you need here
      },

    },
  },
  plugins: [],
}

