module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollSnapType: {
        x: 'x',
        y: 'y',
        none: 'none',
        both: 'both',
      },
      animation: {
        'bounce200': 'bounce 1s infinite 200ms',
        'bounce400': 'bounce 1s infinite 400ms',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
  ],
};
