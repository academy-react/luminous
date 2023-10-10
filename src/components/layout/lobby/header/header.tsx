import type { Locale } from "#/i18n.config";

import Navbar from "./navbar";

const Header = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <Navbar lang={lang} />
    </>
  );
};

export default Header;
