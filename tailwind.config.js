/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        surface: "#121214",
        primary: "#00f2ff",
        secondary: "#7000ff",
        accent: "#ff00d4",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      backgroundImage: {
        "futuristic-gradient": "radial-gradient(circle at center, #1a1a2e 0%, #0a0a0c 100%)",
        "neon-glow": "linear-gradient(45deg, #00f2ff, #7000ff)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      }
    },
  },
  plugins: [],
}
