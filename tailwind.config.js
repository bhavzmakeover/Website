/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        'boom-particle': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}