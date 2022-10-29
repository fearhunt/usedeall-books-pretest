/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"	
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#761CEC",
        "dark-primary": "#180C60",
        "secondary": "#F4F2FF",
        "accent-red": "#F252A7",
        "accent-green": "008A87",
        "accent-orange": "#FA6B26",
        "accent-blue": "#1578CE"
      },
      container: {
        center: true,
        padding: "1.5rem"
      }
    },
  },
  plugins: [],
}
