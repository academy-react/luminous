import "@/styles/globals.css";

import { type Metadata } from "next";

import ThemeProvider from "@/components/providers/theme-provider";
import TailwindIndicator from "@/components/utils/tailwind-indicator";

import { i18n, type Locale } from "#/i18n.config";

export const metadata: Metadata = {
  title: "Luminous",
  description: "The Luminous Team React Project",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export const generateStaticParams = () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className="h-screen min-h-screen"
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
