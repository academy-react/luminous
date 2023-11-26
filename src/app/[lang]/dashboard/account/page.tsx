import { ScheduleTable } from "@/components/pages/user-panel/account-page";
import { LatestPostsCard } from "@/components/pages/user-panel/account-page/latest-posts-card";
import { SmallDetailCard } from "@/components/pages/user-panel/account-page/small-detail-card";

import {
  dashboardAccountPageDict,
  mockDashboardAccountPageDict,
} from "@/dict/pages/dashboard/account.page.dict";

import { getUserProfileInfo } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const AccountPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const data = await getUserProfileInfo();
  const dict = dashboardAccountPageDict;
  const mockData = mockDashboardAccountPageDict;

  if (!data) return null;

  return (
    <div className="grid h-full w-full grid-cols-5 items-center justify-center">
      <div className="col-span-3 flex h-full flex-col items-start justify-between">
        <div className="h-full w-full">
          <p className="py-2 text-xl font-semibold">
            {dict.latestUpdates[lang]}
          </p>
          <div className="grid max-w-full snap-x grid-flow-col gap-3 overflow-auto scrollbar-none">
            {mockData.latestUpdates.map((post, index) => (
              <LatestPostsCard key={index} index={index} post={post} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex w-full items-center justify-between py-3 text-xl font-semibold">
            <p>{dict.weeklySchedule[lang]}</p>
            <p>{mockData.month[lang]}</p>
          </div>
          <ScheduleTable lang={lang} schedule={mockData.schedule} />
        </div>
      </div>
      <div className="col-span-2 grid h-full grid-cols-2">
        <div className="h-full "></div>
        <div className="flex h-full flex-col justify-between p-2">
          {dict.smallDetailsCardKeys.map((card, index) => (
            <SmallDetailCard key={index} lang={lang} card={card} count={5} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
