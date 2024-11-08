/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#1a1a1a", 
        customGray: "#a2a2a2", 
        customRed: "#e61e1e", 
        customRedLight:"#e55858"
      }
    },
  },
  plugins: [],
}

