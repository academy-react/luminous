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
        mitra: ["var(--font-mitra)"],
        multi: ["var(--font-mitra)", "var(--font-roboto)"],
      },
      colors: {
        background: "hsl(var(--background))",
        purple: {
          primary: "var(--purple-primary)",
          secondary: "var(--purple-secondary)",
          text: "var(--purple-text)",
          btn: "var(--purple-btn)",
        },
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), require("tailwindcss-animate")],
};

export default config;
