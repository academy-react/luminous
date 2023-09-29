import "@/styles/globals.css";

import { type Metadata } from "next";

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
      <body className="h-screen min-h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
