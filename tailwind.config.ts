import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};

export default config;
