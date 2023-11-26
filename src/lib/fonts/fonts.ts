import { Inter as FontSans, Roboto as RobotoFont } from "next/font/google";
import localFont from "next/font/local";

export const fontRoboto = RobotoFont({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const fontSans = FontSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontIranSans = localFont({
  src: [
    {
      path: "./IranSansX Family/IRANSansX-1-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-2-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-3-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-5-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-6-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-7-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-8-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./IranSansX Family/IRANSansX-9-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-iran-sans",
});
