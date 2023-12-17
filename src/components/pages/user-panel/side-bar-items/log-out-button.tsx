"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { logOutAction } from "@/core/actions";

import { type Locale } from "#/i18n.config";

export const LogOutButton = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const res = await logOutAction();

    if (res) {
      router.push(`/${lang}`);
    }
  };
  return (
    <div className="flex items-center gap-2 py-7 font-bold text-white">
      <Icons.logOut className="" />
      <Button className="" onClick={() => void handleLogOut()}>
        {
          {
            fa: "خروج از حساب کاربری",
            en: "Exit",
          }[lang]
        }
      </Button>
    </div>
  );
};
