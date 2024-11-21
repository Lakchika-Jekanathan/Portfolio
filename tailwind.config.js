const { Layout } = require('lucide-react')

/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    screens: {
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",
      },

      fontFamily:{
        primary:"var(--font-jetbrainsmono)",

      },

    extend: {
      colors: {
        primary: '#000026',
        accent: {
          DEFAULT: '#008b8b',
          nav:'#213A58',
          
          hover: '#00ffff',
        }
      },

    },
  },
  plugins: [require("tailwindcss-animate"),
  ],
  
}