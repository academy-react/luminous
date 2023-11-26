import {
  ScheduleTable,
  UserDashboardNotification,
} from "@/components/pages/user-panel/account-page";
import { SmallDetailCard } from "@/components/pages/user-panel/cards/small-detail-card";
import { H3 } from "@/components/elements/ui";

import { dashboardAccountPageDict } from "@/dict/pages/dashboard/account.page.dict";

import { getUserProfileInfo } from "@/core/services/api";

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
    <div className="grid h-full w-full grid-cols-5 items-center justify-center">
      <div className="col-span-3 flex h-full flex-col items-center">
        <div className="flex w-full items-center justify-between py-3 text-xl font-semibold">
          <p>{dict.weeklySchedule[lang]}</p>
          <p>{dict.mockMonth[lang]}</p>
        </div>
        <ScheduleTable lang={lang} />
      </div>
      <div className="col-span-2 grid h-full grid-cols-2">
        <div className="h-full "></div>
        <div className="flex h-full flex-col justify-between">
          {dict.smallDetailsCardKeys.map((card, index) => (
            <SmallDetailCard key={index} lang={lang} card={card} count={5} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
