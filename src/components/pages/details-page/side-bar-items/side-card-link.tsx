import { Files } from "lucide-react";

import { Button } from "@/components/elements/ui";

import { linkSideCardDict } from "@/dict/pages/details.dict";

import { type Locale } from "#/i18n.config";

import { SideCard } from ".";

export const LinkSideCard = ({
  lang,
  link,
}: {
  lang: Locale;
  link: string;
}) => {
  return (
    <SideCard
      lang={lang}
      title={linkSideCardDict.text}
      color={linkSideCardDict.color}
    >
      <div
        className="flex items-center justify-between gap-x-2.5 rounded-xl border border-dashed border-gray-600/30 bg-background p-4 text-text/60"
        dir="rtl"
      >
        <Button size="icon" className="">
          <Files />
        </Button>
        <span className="truncate text-lg" dir="ltr">
          {link}
        </span>
      </div>
    </SideCard>
  );
};
