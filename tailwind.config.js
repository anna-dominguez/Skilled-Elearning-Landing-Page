/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      headingXL: ['56px', '70px'],
      headingL: ['40px', '50px'],
      headingM: ['32px', '40px'],
      headingS: ['24px', '32px'],
      headingXS: ['20px', '24px'],
      bodyM: ['18px', '28px'],
      bodyS: ['16px', '26px'],
    },
    colors: {
      greyblue: '#666CA3',
      darkblue: '#13183F',
      grey: '#83869A',
      darkpink: '#F74780',
      pink: '#FFA7C3',
      violet: '#4851FF',
      red: '#F02AA6',
      orange: '#FF6F48',
    },
    extend: {
      fontFamily: {
        sans: 'Plus Jakarta Sans',
      },
    },
  },
  plugins: [],
}
