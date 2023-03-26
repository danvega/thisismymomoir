import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E0C3C6',
          200: 'd799a0'
        }
      },
      fontFamily: {
        ptserif: ['PT Serif'],
        cormorant: ['Cormorant Garamond'],
        turbinado: ['turbinado-pro', 'sans-serif']
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    }
  }
}
