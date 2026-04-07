/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html, js}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anonymous: ['Anonymous Pro'],
        manrope: ['Manrope'],
        yester: ['Yesteryear']
      },
    },
  },
  plugins: [],
}

