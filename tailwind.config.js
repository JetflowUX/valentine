module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
        'crimson-dark': '#8B0A1A',
        'crimson-light': '#FF1744',
        'rose-red': '#E63946',
        'fire-red': '#F72585',
        'glow-red': '#FF006E',
        'passion': '#A4161A',
        'deep-red': '#660000',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'confetti': 'confetti 3s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'rotate-3d': 'rotate3d 6s ease-in-out infinite',
        'float-3d': 'float3d 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'orbital': 'orbital 60s linear infinite',
        'drift': 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(-5deg)' },
          '50%': { transform: 'translateY(-25px) rotateZ(5deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(220, 20, 60, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(220, 20, 60, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(500px) rotate(720deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px rgba(220, 20, 60, 0.5), 0 0 20px rgba(255, 23, 68, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(220, 20, 60, 0.8), 0 0 40px rgba(255, 23, 68, 0.6)' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(10deg) rotateY(10deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px)' },
          '50%': { transform: 'translateY(-20px) translateZ(20px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        orbital: {
          '0%': { transform: 'rotate(0deg) translateX(300px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(300px) rotate(-360deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
