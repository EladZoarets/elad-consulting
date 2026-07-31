/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep navy / charcoal base
        ink: {
          950: "#08090d",
          900: "#0d0f16",
          850: "#12141d",
          800: "#171a24",
          700: "#20242f",
          600: "#2c3140",
          500: "#3d4356",
        },
        // Warm gold accent
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f5a623",
          600: "#e09512",
          700: "#b87708",
        },
        // Light-mode paper tones
        paper: {
          50: "#fafaf8",
          100: "#f4f3ef",
          200: "#e9e7e0",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "var(--font-inter)", "sans-serif"],
        latin: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgba(245, 166, 35, 0.35)",
        card: "0 8px 40px -12px rgba(0, 0, 0, 0.45)",
        "card-light": "0 8px 40px -16px rgba(15, 23, 42, 0.18)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 24s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
