/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a446',
          hover: '#e0b84f',
          light: '#d4af5a',
          muted: 'rgba(201, 164, 70, 0.2)',
        },
        navy: {
          DEFAULT: '#0a0e1a',
          secondary: '#111827',
          card: '#1a2236',
          deep: '#050810',
        },
      },
    },
  },
  plugins: [],
}
