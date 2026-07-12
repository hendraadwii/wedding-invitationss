import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: '#16213E',
        accent: '#D4AF37',
        text: '#F8F8F8',
        muted: '#B5B5B5',
        background: '#1A1A2E',
        card: '#16213E',
      },
      fontFamily: {
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        'nama-desktop': ['72px', { lineHeight: '120%' }],
        'nama-tablet': ['60px', { lineHeight: '120%' }],
        'nama-mobile': ['48px', { lineHeight: '120%' }],
        'ampersand-desktop': ['60px', { lineHeight: '120%' }],
        'ampersand-tablet': ['50px', { lineHeight: '120%' }],
        'ampersand-mobile': ['42px', { lineHeight: '120%' }],
        'hero-desktop': ['34px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'hero-mobile': ['24px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'heading-desktop': ['40px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'heading-tablet': ['34px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'heading-mobile': ['30px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'subheading': ['28px', { lineHeight: '120%', letterSpacing: '0.03em' }],
        'body-desktop': ['17px', { lineHeight: '170%' }],
        'body': ['16px', { lineHeight: '170%' }],
        'body-mobile': ['16px', { lineHeight: '170%' }],
        'btn-desktop': ['16px', { lineHeight: '150%', letterSpacing: '0.04em' }],
        'btn': ['15px', { lineHeight: '150%', letterSpacing: '0.04em' }],
        'footer-desktop': ['14px', { lineHeight: '150%' }],
        'footer-mobile': ['13px', { lineHeight: '150%' }],
      },
      letterSpacing: {
        heading: '0.03em',
        button: '0.04em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
