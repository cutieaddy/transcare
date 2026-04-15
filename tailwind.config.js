/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: {
            50: '#FBEAF0',
            100: '#F4C0D1',
            200: '#ED93B1',
            300: '#E46A95',
            400: '#D4537E',
            500: '#C43D67',
            600: '#993556',
            700: '#72243E',
            800: '#4B1528',
          },
          blue: {
            50: '#E6F1FB',
            100: '#B5D4F4',
            200: '#85B7EB',
            300: '#5A9CE0',
            400: '#378ADD',
            500: '#2574C4',
            600: '#185FA5',
            700: '#0C447C',
            800: '#042C53',
          },
          teal: {
            50: '#E1F5EE',
            100: '#9FE1CB',
            200: '#5DCAA5',
            400: '#1D9E75',
            600: '#0F6E56',
          },
        },
      },
    },
  },
  plugins: [],
};
