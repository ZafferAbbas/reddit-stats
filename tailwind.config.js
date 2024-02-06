/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'brand-red': {
          100: '#e71e27',
          200: '#db3547',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

