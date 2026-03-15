import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        neon: {
          blue: "#00f0ff",
          purple: "#8a2be2",
        },
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #8a2be233 0deg, #00f0ff33 180deg, transparent 360deg)',
      },

      backgroundSize: {
        grid: "40px 40px",
      },

      boxShadow: {
        neon: "0 0 20px rgba(0,255,255,0.6)",
      },

      animation: {
        gradient: "gradient 6s ease infinite",
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },

      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' },
          '100%': { boxShadow: '0 0 20px #8a2be2, 0 0 30px #8a2be2' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
