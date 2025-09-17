/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Map to the CSS font-family declared in index.css
        font1: ['Lausanne', 'sans-serif'],
        font2: ['Lausanne', 'sans-serif'],
      },
      fontWeight: {
        // Tailwind utilities `font-light` and `font-medium` map to these weights
        light: 300,
        medium: 500,
      },
    },
  },
  plugins: [],
}
