import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "background": "hsl(var(--background))",
        "foreground": "hsl(var(--foreground))",
        "muted": "hsl(var(--muted))",
        "accent": "hsl(var(--accent))"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        card: "0 20px 50px -24px rgba(15, 23, 42, 0.5)"
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
