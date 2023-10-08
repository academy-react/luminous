import "@/styles/globals.css";

import { type Metadata } from "next";

import { mitra, roboto } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/lobby/footer/footer";
import Header from "@/components/layout/lobby/header/header";
import Hero from "@/components/layout/lobby/hero/Hero";
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
        className={cn(
          "h-screen min-h-screen font-multi",
          roboto.variable,
          mitra.variable
        )}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-full w-full">
            <Header />
            <Hero />
            {children}

            <Footer />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
