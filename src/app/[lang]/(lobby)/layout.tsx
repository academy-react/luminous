import { type Metadata } from "next";

import { Footer } from "@/components/layouts/footer/footer";
import { Header } from "@/components/layouts/header/header";

import { type Locale } from "#/i18n.config";

export const metadata: Metadata = {
  title: "Luminous",
  description: "The Luminous Team React Project",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const LobbyLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
};

export default LobbyLayout;
