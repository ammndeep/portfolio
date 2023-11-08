/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        brightBackground: "#08090a",
        brightGreen: "#20e39f",
        lightText: "#959595",
      }
    },
  },
  plugins: [],
}