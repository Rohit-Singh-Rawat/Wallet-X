/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :  {
        'bgBlack': "#080C08"
      },
      screens: {
        'xs': '315px',
        // => @media (min-width: 315px) { ... }
      },
    
    },
  },
  plugins: [],
}
 