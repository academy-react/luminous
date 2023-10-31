import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

export const MobileNav = ({ lang }: { lang: Locale }) => {
  return (
    <button className="h-full rounded-lg text-primary transition-all duration-500 hover:text-accent md:hidden">
      <Icons.menu />
    </button>
  );
};
