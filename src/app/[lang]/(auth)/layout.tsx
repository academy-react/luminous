import "@/styles/globals.css";

import { type Locale } from "#/i18n.config";

const AuthLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return <div className="h-full w-full">{children}</div>;
};

export default AuthLayout;
