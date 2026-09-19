/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071A33',
          'navy-deep': '#040F1F',
          'navy-surface': '#0B2345',
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-light': '#3B82F6',
          cyan: '#06B6D4',
          'cyan-hover': '#0891B2',
          'cyan-glow': 'rgba(6, 182, 212, 0.25)',
          slate: '#0F172A',
          muted: '#64748B',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          'border-dark': '#1E293B',
          emerald: '#22C55E',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(6, 182, 212, 0.35)',
        'glow-blue': '0 0 25px -4px rgba(37, 99, 235, 0.35)',
        'saas-card': '0 4px 20px -2px rgba(7, 26, 51, 0.06), 0 2px 6px -1px rgba(7, 26, 51, 0.04)',
        'saas-card-hover': '0 16px 36px -4px rgba(7, 26, 51, 0.12), 0 4px 12px -2px rgba(7, 26, 51, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
