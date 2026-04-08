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
        ocean: {
          deep: '#0a3d62',
          blue: '#1565c0',
        },
        teal: {
          DEFAULT: '#0097a7',
          accent: '#0097a7',
          sky: '#29b6f6',
        },
        warm: {
          white: '#fafcff',
          sand: '#fef9f0',
          card: '#ffffff',
        },
        navy: {
          DEFAULT: '#0a1628',
          secondary: '#546e7a',
        },
        coral: '#ff6b35',
      },
    },
  },
  plugins: [],
}
