import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  theme: {
    extend: {
      colors: {
        primary: '#E0C3C6'
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
