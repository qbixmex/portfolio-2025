import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1580px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large": 'ping-large 1s ease-in-out infinite',
        "ping-medium": 'ping-medium 1s ease-in-out infinite',
        "move-left": 'move-left 10s linear infinite',
        "move-right": 'move-right 10s linear infinite'
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        "ping-medium": {
          "75%, 100%": {
            transform: 'scale(2)',
            opacity: '0',
          }
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
            transform: "translateX(-50%)"
          }
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)"
          },
          "100%": {
            transform: "translateX(0%)"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
