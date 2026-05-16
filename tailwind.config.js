// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' }, // move right
        },
      },
      animation: {
        bounceX: 'bounceX 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
