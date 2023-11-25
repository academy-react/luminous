import { type Locale } from "#/i18n.config";

const CourseDashboard = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      courses
    </div>
  );
};
export default CourseDashboard;
