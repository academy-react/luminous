import {
  LogOutButton,
  UserAvatar,
} from "@/components/pages/user-panel/side-bar-items";
import { SideBarNav } from "@/components/pages/user-panel/side-bar-items/client";

import { getUserProfileInfo } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const DashboardLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const data = await getUserProfileInfo();

  console.log(data);

  if (!data) return null;

  return (
    <div className="flex h-screen max-h-screen min-h-screen w-full items-center px-24 py-16">
      <div className="flex h-full w-full rounded-2xl bg-primary py-3 pe-3">
        <aside className="hidden h-full flex-col items-center justify-between lg:flex lg:w-1/4">
          <div className="flex w-full flex-col items-center">
            <UserAvatar
              fName={data.fName}
              lName={data.lName}
              picture={data.currentPictureAddress}
            />
            <SideBarNav lang={lang} />
          </div>
          <LogOutButton lang={lang} />
        </aside>
        <section className="h-full w-full rounded-xl bg-card p-10">
          {children}
        </section>
      </div>
    </div>
  );
};
export default DashboardLayout;
