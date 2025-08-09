/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core Colors */
        background: 'var(--color-background)', /* black */
        foreground: 'var(--color-foreground)', /* white */
        border: 'var(--color-border)', /* gray-800 */
        input: 'var(--color-input)', /* gray-900 */
        ring: 'var(--color-ring)', /* custom-green */
        
        /* Card Colors */
        card: {
          DEFAULT: 'var(--color-card)', /* gray-900 */
          foreground: 'var(--color-card-foreground)' /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* gray-800 */
          foreground: 'var(--color-popover-foreground)' /* white */
        },
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-800 */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        
        /* Primary Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', /* custom-green */
          foreground: 'var(--color-primary-foreground)' /* gray-950 */
        },
        
        /* Secondary Colors */
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* gray-900 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        
        /* Accent Colors */
        accent: {
          DEFAULT: 'var(--color-accent)', /* custom-cyan */
          foreground: 'var(--color-accent-foreground)' /* gray-950 */
        },
        
        /* State Colors */
        success: {
          DEFAULT: 'var(--color-success)', /* custom-teal */
          foreground: 'var(--color-success-foreground)' /* gray-950 */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* custom-amber */
          foreground: 'var(--color-warning-foreground)' /* gray-950 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* custom-red */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* custom-red */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        
        /* Brand Specific Colors */
        surface: 'var(--color-surface)', /* gray-800 */
        'deep-focus': 'var(--color-deep-focus)', /* gray-950 */
        'content-separation': 'var(--color-content-separation)', /* gray-900 */
        'text-secondary': 'var(--color-text-secondary)' /* gray-500 */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'monospace'],
        code: ['Fira Code', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'monospace']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'code': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 136, 0.3)',
        'glow': '0 0 20px rgba(0, 255, 136, 0.6)',
        'glow-lg': '0 0 30px rgba(0, 255, 136, 0.8)',
        'accent-glow': '0 0 20px rgba(0, 212, 255, 0.6)',
        'elevation-subtle': '0 4px 20px rgba(0, 255, 136, 0.1)',
        'elevation-card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevation-float': '0 12px 40px rgba(0, 0, 0, 0.4)'
      },
      backdropBlur: {
        'glass': '20px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'border-rotate': 'border-rotate 8s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'reveal-up': 'reveal-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'reveal-left': 'reveal-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'reveal-right': 'reveal-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 5px currentColor)' },
          'to': { filter: 'drop-shadow(0 0 15px currentColor)' }
        },
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--color-primary)' }
        },
        'reveal-up': {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        'reveal-left': {
          'from': { transform: 'translateX(-50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        'reveal-right': {
          'from': { transform: 'translateX(50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'reveal': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}