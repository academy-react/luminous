import { type Locale } from "#/i18n.config";

const EditProfile = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      edit profile
    </div>
  );
};
export default EditProfile;
