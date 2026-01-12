/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          DEFAULT: 'linear-gradient(45deg, #fb923c, #f59e0b, #eab308)'
        }
      },
      backgroundImage: {
        'electric-gradient': 'linear-gradient(to right, #fb923c, #f59e0b, #eab308)'
      }
    }
  },
  plugins: []
}