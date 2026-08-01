/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Brand Colors - Forge AI OS
      colors: {
        // Light Mode Backgrounds
        background: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
          tertiary: '#F5F5F5',
        },
        // Light Mode Surfaces
        surface: {
          card: '#FFFFFF',
          modal: '#FFFFFF',
          sidebar: '#FCFCFC',
          workspace: '#FFFFFF',
        },
        // Light Mode Text
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
          muted: '#737373',
          disabled: '#A3A3A3',
        },
        // Light Mode Borders
        border: {
          light: '#E5E5E5',
          medium: '#D4D4D4',
          strong: '#A3A3A3',
        },
        // Dark Mode Backgrounds
        dark: {
          primary: '#09090B',
          secondary: '#111113',
          tertiary: '#18181B',
        },
        // Dark Mode Surfaces
        'dark-surface': {
          card: '#18181B',
          modal: '#1E1E20',
          sidebar: '#121214',
          workspace: '#09090B',
        },
        // Dark Mode Text
        'dark-text': {
          primary: '#FAFAFA',
          secondary: '#D4D4D8',
          muted: '#A1A1AA',
          disabled: '#71717A',
        },
        // Dark Mode Borders
        'dark-border': {
          light: '#27272A',
          medium: '#3F3F46',
          strong: '#52525B',
        },
        // Brand Accent Colors (consistent in both themes)
        ai: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#0EA5E9',
      },
      // Typography - Geist Sans & Inter
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
        display: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      // Font Scale
      fontSize: {
        display: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        hero: ['52px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h1: ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h2: ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        h3: ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        h4: ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
        h5: ['20px', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '1.5', letterSpacing: '0' }],
        body: ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        small: ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        caption: ['12px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      // Spacing System (Base Unit: 4px)
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        24: '96px',
        32: '128px',
      },
      // Border Radius
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        card: '24px',
        pill: '999px',
      },
      // Shadows / Elevation
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'soft-sm': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 25px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
      // Animation Speeds
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
        page: '600ms',
      },
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-up': 'slideUp 0.25s ease-out forwards',
        'slide-down': 'slideDown 0.25s ease-out forwards',
        'scale-in': 'scaleIn 0.15s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      // Grid System
      maxWidth: {
        'app': '1440px',
      },
      // Icon Sizes
      icon: {
        xs: '16px',
        sm: '18px',
        md: '20px',
        lg: '24px',
        xl: '28px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}
