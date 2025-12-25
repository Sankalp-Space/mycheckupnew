/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-background': '#D8BFD8',
        'theme-primary': '#5A2B4D',
        'theme-secondary': '#4b2e4b',
        'theme-text': '#6b5a64',
        'theme-dark': '#2b1e24',
      },
    },
  },
  plugins: [],
}
