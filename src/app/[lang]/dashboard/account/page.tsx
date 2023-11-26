import { Bell } from "lucide-react";

import { ScheduleTable } from "@/components/pages/user-panel/account-page/schedule-table";
import { SmallDetailCard } from "@/components/pages/user-panel/cards/small-detail-card";
import { H3 } from "@/components/elements/ui";

import { dashboardAccountPageDict } from "@/dict/pages/dashboard/account.page.dict";

import { getUserProfileInfo } from "@/core/services/api";
import { formatDate } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

const AccountPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const data = await getUserProfileInfo();
  const dict = dashboardAccountPageDict;

  if (!data) return null;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <header className="flex w-full items-center justify-between pb-5">
        <H3 className="text-2xl font-extrabold text-zinc-700">
          {data.fName + " " + data.lName}
          {dict.welcomeText[lang]}
        </H3>
        <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-background text-slate-500 transition-all duration-500 hover:opacity-50">
          <Bell />
        </div>
      </header>

      <div className="grid h-full w-full grid-cols-5 items-center justify-center">
        <div className="col-span-3 flex h-full flex-col items-center">
          <div className="flex w-full items-center justify-between py-3 text-xl font-semibold">
            <p className="">{dict.weeklySchedule[lang]}</p>
            <p className="">
              {
                {
                  fa: "آذر ۱۴۰۲",
                  en: "December 2023",
                }[lang]
              }
            </p>
          </div>
          <ScheduleTable lang={lang} />
        </div>
        <div className="col-span-2 grid h-full grid-cols-2">
          <div className="h-full "></div>
          <div className="flex h-full flex-col justify-between">
            {dict.smallDetailsCardKeys.map((card, index) => (
              <SmallDetailCard
                key={index}
                lang={lang}
                title={card.title}
                subtitle={card.subtitle}
                Icon={card.Icon}
                color={card.color}
                count={5}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
