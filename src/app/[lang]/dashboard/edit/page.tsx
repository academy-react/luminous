import { type Locale } from "#/i18n.config";

const ProfileDetails = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      edit profile
    </div>
  );
};
export default ProfileDetails;
