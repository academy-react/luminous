import "@/styles/globals.css";

import { type Locale } from "#/i18n.config";

const AuthLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[30rem]">{children}</div>
    </div>
  );
};

export default AuthLayout;
