/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'progress': 'progress 2s cubic-bezier(0.65, 0.05, 0.36, 1) forwards',
        'count-up': 'count-up 1s cubic-bezier(0.42, 0, 0.58, 1) forwards',
        'fade-in-right': 'fade-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'gradient-text': 'gradient 4s ease infinite',
        'text-glow': 'text-glow 4s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
        'text-reveal': 'text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'line-draw': 'line-draw 2s ease-in-out forwards',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
      boxShadow: {
        'neumorphic-light': '5px 5px 15px rgba(0,0,0,0.05), -5px -5px 15px rgba(255,255,255,0.5)',
        'neumorphic-dark': '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.1)',
        'inner-neumorphic': 'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(255,255,255,0.3)',
        'brutalist': '5px 5px 0px rgba(0,0,0,0.8)',
        'clay': '10px 10px 30px rgba(0,0,0,0.15), -10px -10px 30px rgba(255,255,255,0.25), inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px rgba(255,255,255,0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
        'text': 'text-shadow',
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      textShadow: {
        'glow': '0 0 10px rgba(0, 0, 255, 0.3)',
        'sharp': '1px 1px 0px #000',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff',
      },
      borderRadius: {
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      zIndex: {
        '-10': '-10',
      },
      lineHeight: {
        'extra-tight': '1.05',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};
