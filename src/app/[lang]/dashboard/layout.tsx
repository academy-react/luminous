import { LogOutButton } from "@/components/pages/user-panel/side-bar-items/log-out-button";
import { PanelAvatar } from "@/components/pages/user-panel/side-bar-items/panel-avatar";
import { SideBarNav } from "@/components/pages/user-panel/side-bar-items/side-nav-bar";

import { type Locale } from "#/i18n.config";

const DashboardLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <div className="flex h-screen max-h-screen min-h-screen w-full items-center px-24 py-16">
      <div className="flex h-full w-full rounded-2xl bg-primary py-3 pe-3">
        <aside className="hidden h-full flex-col items-center justify-between lg:flex lg:w-1/4">
          <div className="flex w-full flex-col items-center">
            <PanelAvatar lang={lang} />
            <SideBarNav lang={lang} />
          </div>
          <LogOutButton lang={lang} />
        </aside>
        <section className="h-full w-full rounded-xl bg-card">
          {children}
        </section>
      </div>
    </div>
  );
};
export default DashboardLayout;
