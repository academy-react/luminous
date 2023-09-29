import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const mitra = localFont({
  src: [
    {
      path: "/Mitra Family/Mitra - Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/Mitra Family/Mitra - Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mitra",
});
