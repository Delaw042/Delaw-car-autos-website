/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable manual dark mode control
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'], // for headings
        body: ['Inter', 'sans-serif'], 
      }, 
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke',
    },
  }, 
},
  plugins: [],
};
