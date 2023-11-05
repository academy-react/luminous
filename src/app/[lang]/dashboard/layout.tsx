import { Locale } from "#/i18n.config";

const DashboardLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <section className="h-[600px] w-full border border-black ">
      <aside> sidebar</aside>
      <section>
        {children}
      </section>
    </section>
  );
};
export default DashboardLayout;
