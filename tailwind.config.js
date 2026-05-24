module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF9F0',
          100: '#FFE8D0',
          200: '#FFD4A8',
          300: '#FFC280',
          400: '#F4C46E',
          500: '#E6B550',
          600: '#D4A238',
          700: '#C29120',
          800: '#9B7318',
          900: '#734B10',
        },
        secondary: {
          50: '#F0F7FB',
          100: '#D4E8F3',
          200: '#B8D9EB',
          300: '#9CCAE3',
          400: '#7CB8C8',
          500: '#6AAAB8',
          600: '#589CA8',
          700: '#468E98',
          800: '#348088',
          900: '#227278',
        },
        sage: {
          50: '#F8F9F6',
          100: '#EAEAE2',
          200: '#DCD9CE',
          300: '#C4BFAF',
          400: '#A8B89C',
          500: '#9DAD8F',
          600: '#8FA282',
          700: '#809475',
          800: '#6D8062',
          900: '#5A6B4F',
        },
        forest: {
          50: '#F3F6F4',
          100: '#D9E4DE',
          200: '#BFD2C8',
          300: '#A5C0B2',
          400: '#7CB8C8',
          500: '#6AAAB8',
          600: '#58A0AA',
          700: '#46929C',
          800: '#3D6B4F',
          900: '#2B4A36',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #F4C46E 0%, #7CB8C8 100%)',
        'gradient-soft': 'linear-gradient(180deg, rgba(244, 196, 110, 0.1) 0%, rgba(123, 184, 200, 0.1) 100%)',
      },
      boxShadow: {
        'lg-soft': '0 10px 40px rgba(123, 184, 200, 0.15)',
        'premium': '0 20px 60px rgba(61, 107, 79, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
