import { PanelAsideOption } from "@/components/pages/user-panel/panel-sidebar-items/panel-aside-option";
import { PanelAvatar } from "@/components/pages/user-panel/panel-sidebar-items/panel-avatar";

import { type Locale } from "#/i18n.config";

const DashboardLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <div className="mt-10 flex flex-row lg:px-[5%] xl:px-[8%]">
      <aside className="sticky  top-10 hidden h-full flex-col gap-10  lg:flex lg:w-1/4">
        <div className="mt-5 flex w-10/12 gap-4 border border-black pr-2  ">
          <PanelAvatar />
        </div>
        <div className="">
          <PanelAsideOption lang={lang} />
        </div>
      </aside>

      <div></div>
      <section className="h-[900px] rounded-xl border border-black bg-card shadow md:w-full lg:w-3/4">
        {children}
      </section>
    </div>
  );
};
export default DashboardLayout;
