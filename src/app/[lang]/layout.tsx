import "@/styles/globals.css";

import { type Metadata } from "next";

import { iranSans, mitra, roboto } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import ThemeProvider from "@/components/providers/theme-provider";
import TailwindIndicator from "@/components/utils/tailwind-indicator";

import { i18n, type Locale } from "#/i18n.config";
import Link from "next/link";

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
          "min-h-screen font-multi antialiased",
          roboto.variable,
          iranSans.variable,
          mitra.variable
        )}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header lang={lang} />
            <Link href="/not-existing-route">Not Found</Link>
            {children}
            <Footer lang={lang} />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
