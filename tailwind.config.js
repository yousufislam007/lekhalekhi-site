/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4ec',
          100: '#f8e3cc',
          500: '#b6551b',
          600: '#984417',
          700: '#7a3512',
          900: '#3f1a08',
        },
      },
    },
  },
  plugins: [],
};
