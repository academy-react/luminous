import "@/styles/globals.css";

import { type Metadata } from "next";

import { Toaster } from "@/components/elements/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TailwindIndicator } from "@/components/utils/tailwind-indicator";

import { iranSans, mitra, roboto } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";

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
          "min-h-screen font-multi antialiased",
          roboto.variable,
          iranSans.variable,
          mitra.variable
        )}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster lang={lang} />
      </body>
    </html>
  );
};

export default RootLayout;
