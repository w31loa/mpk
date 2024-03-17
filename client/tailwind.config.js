/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ["Hind"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [

      require('tailwindcss-animated'),

    require('@tailwindcss/forms'),
  ],
}