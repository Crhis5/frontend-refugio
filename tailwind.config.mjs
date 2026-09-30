/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        refuge: {
          950: '#641F2B',
          900: '#7D2636',
          800: '#8F2938',
          700: '#B23A48',
          500: '#D96C70',
          100: '#F7D9DB'
        },
        sun: { 400: '#F8D568', 500: '#F5C542' },
        cream: '#FFF8ED',
        ink: '#321B1F',
        muted: '#745E61',
        success: '#39765A'
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(2, 38, 50, 0.18)'
      }
    }
  },
  plugins: []
};
