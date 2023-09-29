import "@/styles/globals.css";

import { type Metadata } from "next";

import TailwindIndicator from "@/components/utils/tailwind-indicator";

export const metadata: Metadata = {
  title: "Luminous",
  description: "The Luminous Team React Project",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="h-screen min-h-screen">
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
