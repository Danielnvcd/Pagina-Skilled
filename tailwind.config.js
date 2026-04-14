/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#00416B',
        },
        accent: {
          red: '#EA0029',
        },
        neutral: {
          gray: '#F8F9FA',
          light: '#F1F3F5',
          dark: '#111827'
        }
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
