/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    width:{

    },
      colors:{
        "dark-bg":"#141c2e",
        "dark-gray":"#1e2b48",
        "dark-blue":"#007afd",
        "light-green" : "#006400",
      }
    },
  },
  plugins: [],
}