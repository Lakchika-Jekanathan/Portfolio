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
      sm:"650px",
      md:"760px",
      lg:"970px",
      sm:"1200px",
      },

      fontFamily:{
        primary:"var(--font-jetbrainsmono)",

      },

    extend: {
      colors: {
        primary: '#000026',
        accent: {
          DEFAULT: '#008b8b',
          
          hover: '#00ffff',
        }
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}