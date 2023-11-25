import { Icons } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export const LogOutButton = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex items-center gap-2 py-7 font-bold text-white">
      <Icons.logOut className="" />
      <span className="">
        {
          {
            fa: "خروج از حساب کاربری",
            en: "Exit",
          }[lang]
        }
      </span>
    </div>
  );
};
