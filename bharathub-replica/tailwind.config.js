/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9C27B0',
          secondary: '#E91E63',
          accent: '#FF7A00',
          bg: '#F7F8FA',
          text: '#212121',
          success: '#03A685',
          danger: '#D32F2F',
          express: '#00B0FF',
        }
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 12s linear infinite',
        'snow-fall': 'snowFall 10s linear infinite',
        'rain-fall': 'rainFall 0.8s linear infinite',
        'confetti-fall': 'confettiFall 5s ease-in infinite',
        'leaf-fall': 'leafFall 12s linear infinite',
        'firework-burst': 'fireworkBurst 1.2s cubic-bezier(0, 0, 0.2, 1) forwards',
        'bounce-subtle': 'bounceSubtle 2.5s infinite ease-in-out',
        'splatter': 'splatter 2s ease-out forwards',
        'theme-flash': 'themeFlash 1s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -15px, 0)' },
        },
        slideUp: {
          '0%': { transform: 'translate3d(0, 40px, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -5px, 0)' },
        },
        snowFall: {
          '0%': { transform: 'translate3d(-5vw, -10vh, 0) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.8', transform: 'translate3d(2vw, 10vh, 0) rotate(90deg)' },
          '40%': { transform: 'translate3d(-2vw, 30vh, 0) rotate(180deg)' },
          '60%': { transform: 'translate3d(2vw, 50vh, 0) rotate(270deg)' },
          '80%': { opacity: '0.8', transform: 'translate3d(-2vw, 70vh, 0) rotate(360deg)' },
          '100%': { transform: 'translate3d(5vw, 105vh, 0) rotate(450deg)', opacity: '0' }
        },
        rainFall: {
          '0%': { transform: 'translate3d(0, -20vh, 0) skewX(-15deg)', opacity: '0' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'translate3d(10vw, 110vh, 0) skewX(-15deg)', opacity: '0' }
        },
        confettiFall: {
          '0%': { transform: 'translate3d(0, -10vh, 0) rotateX(0deg) rotateY(0deg)', opacity: '1' },
          '25%': { transform: 'translate3d(5vw, 20vh, 0) rotateX(180deg) rotateY(90deg)' },
          '50%': { transform: 'translate3d(-5vw, 50vh, 0) rotateX(360deg) rotateY(180deg)' },
          '75%': { transform: 'translate3d(5vw, 80vh, 0) rotateX(540deg) rotateY(270deg)' },
          '100%': { transform: 'translate3d(0, 110vh, 0) rotateX(720deg) rotateY(360deg)', opacity: '0' }
        },
        leafFall: {
          '0%': { transform: 'translate3d(0, -10vh, 0) rotate(0deg) skewX(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translate3d(15vw, 105vh, 0) rotate(720deg) skewX(20deg)', opacity: '0' }
        },
        fireworkBurst: {
          '0%': { transform: 'scale(0) translate3d(0,0,0)', opacity: '1' },
          '100%': { transform: 'scale(4) translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)', opacity: '0' }
        },
        splatter: {
          '0%': { transform: 'scale(0.2) translate3d(0,0,0)', opacity: '0' },
          '20%': { opacity: '0.8', transform: 'scale(1.2)' },
          '100%': { transform: 'scale(2.5) translate3d(10px, 10px, 0)', opacity: '0' }
        },
        themeFlash: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(156, 39, 176, 0.3)',
      },
    },
  },
  plugins: [],
}

