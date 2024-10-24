/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right-only': '10px 0px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}