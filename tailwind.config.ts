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
        primary: "#8b5cf6",
        secondary: "#d946ef",
        accent: "#c084fc",
        "bg-deep": "#0a0a0a",
        "bg-surface": "#1a1a1a",
        "text-main": "#e0e0e0",
        "text-muted": "#a0a0a0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
        "gradient-accent": "linear-gradient(135deg, #d946ef 0%, #c084fc 100%)",
        "gradient-dark": "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(139, 92, 246, 0.3)",
        "glow-secondary": "0 0 20px rgba(217, 70, 239, 0.3)",
        "glow-accent": "0 0 20px rgba(192, 132, 252, 0.3)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        "pulse-slow": "pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
