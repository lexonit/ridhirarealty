/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7fb',
          100: '#e1edf6',
          200: '#c6dceb',
          300: '#9ebfdc',
          400: '#719ec8',
          500: '#003366',
          600: '#002a55',
          700: '#002246',
          800: '#001b38',
          900: '#00132b',
        },
        luxury: {
          black: '#0a1520',
          charcoal: '#132435',
          glass: 'rgba(10, 21, 32, 0.8)',
          silver: '#c0c0c0',
          platinum: '#e5e7eb',
          gold: '#cca352',
        }
      },
      fontFamily: {
        sans: ['"Canada Type Gibson"', 'system-ui', 'sans-serif'],
        serif: ['"Canada Type Gibson"', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        scroll: 'scroll 40s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
