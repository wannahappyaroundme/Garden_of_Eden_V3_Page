import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 커스텀 보라색 테마 (매우 연한 그라데이션)
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#e9d5ff',  // 연한 라벤더
          400: '#d8b4fe',  // 부드러운 보라색
          500: '#c084fc',  // 중간 연한 보라색
          600: '#a855f7',  // 약간 진한 보라색
          700: '#9333ea',
          800: '#7e22ce',
          900: '#6b21a8',
          950: '#581c87',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#ddd6fe',  // 연한 바이올렛
          400: '#c4b5fd',  // 부드러운 바이올렛
          500: '#a78bfa',  // 중간 연한 바이올렛
          600: '#8b5cf6',  // 약간 진한 바이올렛
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#5b21b6',
          950: '#4c1d95',
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 0.5s ease-in-out',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'radial-at-c': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'radial-at-tl': 'radial-gradient(circle at top left, var(--tw-gradient-stops))',
        'radial-at-tr': 'radial-gradient(circle at top right, var(--tw-gradient-stops))',
        'radial-at-bl': 'radial-gradient(circle at bottom left, var(--tw-gradient-stops))',
        'radial-at-br': 'radial-gradient(circle at bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
