import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-muted": "var(--background-muted)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        border: "var(--border)",
        // Modern design system colors
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        // Modern extra large radius
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0,0,0,0.04)",
        card: "0 18px 45px rgba(0,0,0,0.06)",
        // Modern elevated shadows
        "soft": "0 2px 15px rgba(0,0,0,0.08)",
        "medium": "0 4px 25px rgba(0,0,0,0.12)",
        "large": "0 8px 35px rgba(0,0,0,0.16)",
        "glow": "0 0 30px rgba(225, 6, 0, 0.15)",
      },
      fontFamily: {
        sans: ["Documan", "Inter", "system-ui", "sans-serif"],
        display: ["Documan", "Inter", "system-ui", "sans-serif"],
        documan: ["Documan", "Inter", "system-ui", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)",
        "gradient-accent": "linear-gradient(135deg, var(--accent) 0%, #ffd633 100%)",
      },
      height: {
        "18": "4.5rem",
        "20": "5rem",
      },
      dropShadow: {
        'lg': '0 10px 8px rgba(0, 0, 0, 0.04), 0 4px 3px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
      },
    }
  },
  plugins: [],
};

export default config;
