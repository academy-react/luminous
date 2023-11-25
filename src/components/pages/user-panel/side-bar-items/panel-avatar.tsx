import { H1 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export const PanelAvatar = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-2 p-7">
      <div className="relative aspect-square h-28">
        {/* <Image
          src="/images/dev/node-red.png"
          fill
          alt="avatar"
          className="rounded-full object-fill"
        /> */}
        <div className="flex h-full items-center justify-center rounded-full bg-gray-200">
          <Icons.placeholder className="h-10 w-10 text-slate-500" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 text-sm">
        <H1 className="font-semibold text-white">
          {{ fa: "فرشته احمدی", en: "Fereshteh Ahmadi" }[lang]}
        </H1>
      </div>
    </div>
  );
};
