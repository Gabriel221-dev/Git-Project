/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         "dark-bg":"#141c2e",
//         "dark-gray":"#1e2b48",
//         "dark-blue":"#007afd"
//       }
//     },
//   },
//   plugins: [],
// }
export default {
  darkMode: 'class', // Enable dark mode class strategy
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
        "dark-bg":"#141c2e",
        "dark-gray":"#1e2b48",
        "dark-blue":"#007afd"
        },
        dark: {
          primary: '#1E3A8A', // Dark Blue
          secondary: '#3B82F6', // Lighter Blue
          darkGray: '#1F2937', // Dark Gray
          lightGray: '#6B7280', // Light Gray
          errorRed: '#DC2626', // Error Red
          background: '#1F2937', // Dark Gray
          text: '#FFFFFF', // White
        },
      },
    },
  },
  variants: {},
  plugins: [],
}