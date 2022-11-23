/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px"
      },
      animation: {
        'bounce-slow': 'up_down 1500ms linear infinite',
      },
      keyframes: {
        up_down: {
          '0%': {transform: 'translateY(0%)'},
          '25%':{transform: 'translateY(3%)'},
          '50%': {transform: 'translateY(5%)'},
          '75%': {transform: 'translateY(3%)'},
          '100%': {transform: 'translateY(0%)'},
        }
      }
    },
  },
  plugins: [],
}