import { type Locale } from "#/i18n.config";

const AccountPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      account
    </div>
  );
};

export default AccountPage;
