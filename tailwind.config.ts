import scrollbar from "tailwind-scrollbar";
import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        xxs: "350px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        iranSans: ["var(--font-iran-sans)"],
        mitra: ["var(--font-mitra)"],
        multi: ["var(--font-iran-sans)", "var(--font-roboto)"],
      },
      colors: {
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        purple: {
          primary: "var(--purple-primary)",
          secondary: "var(--purple-secondary)",
          text: "var(--purple-text)",
          btn: "var(--purple-btn)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), require("tailwindcss-animate")],
};

export default config;
