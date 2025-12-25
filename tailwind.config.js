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
        'theme-primary': '#4B2E4B',
      },
    },
  },
  plugins: [],
}
