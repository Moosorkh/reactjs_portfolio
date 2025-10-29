/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primary colors - Professional Blue
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          hover: 'hsl(var(--color-primary-hover) / <alpha-value>)',
          light: 'hsl(var(--color-primary-light) / <alpha-value>)',
        },
        // Secondary colors - Elegant Indigo
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          hover: 'hsl(var(--color-secondary-hover) / <alpha-value>)',
          light: 'hsl(var(--color-secondary-light) / <alpha-value>)',
        },
        // Accent colors - Modern Teal
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          hover: 'hsl(var(--color-accent-hover) / <alpha-value>)',
          light: 'hsl(var(--color-accent-light) / <alpha-value>)',
        },
        // Highlight colors - Professional Amber
        highlight: {
          DEFAULT: 'hsl(var(--color-highlight) / <alpha-value>)',
          hover: 'hsl(var(--color-highlight-hover) / <alpha-value>)',
        },
        // Background colors
        bg: {
          primary: 'hsl(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-bg-secondary) / <alpha-value>)',
          tertiary: 'hsl(var(--color-bg-tertiary) / <alpha-value>)',
          elevated: 'hsl(var(--color-bg-elevated) / <alpha-value>)',
          overlay: 'hsl(var(--color-bg-overlay) / <alpha-value>)',
        },
        // Text colors
        text: {
          primary: 'hsl(var(--color-text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-text-secondary) / <alpha-value>)',
          tertiary: 'hsl(var(--color-text-tertiary) / <alpha-value>)',
          muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
          inverse: 'hsl(var(--color-text-inverse) / <alpha-value>)',
        },
        // Border colors
        border: {
          primary: 'hsl(var(--color-border-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-border-secondary) / <alpha-value>)',
          accent: 'hsl(var(--color-border-accent) / <alpha-value>)',
        },
        // Status colors
        success: 'hsl(var(--color-success) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)',
        warning: 'hsl(var(--color-warning) / <alpha-value>)',
        info: 'hsl(var(--color-info) / <alpha-value>)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'glow-accent': 'var(--shadow-glow-accent)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};