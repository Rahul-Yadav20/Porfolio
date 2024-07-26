/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        keyframes: {
          'bg-animation': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        animation: {
          'bg-animation': 'bg-animation 15s ease infinite',
        },
      },
    },
  plugins: [],
}

