/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        banner: ['Updock', 'cursive'],
      },
      backgroundImage: {
        bannerGradient: 'linear-gradient(273deg, #f8ceec 0%, #a88beb 74%)',
      },
    },
  },
  plugins: [],
};
