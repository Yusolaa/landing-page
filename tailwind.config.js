/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/jsbb.gif')",
      },
    },
  },
  plugins: [],
};
