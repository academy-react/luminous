import type { Locale } from "#/i18n.config";

import Navbar from "./navbar";

const Header = ({ lang }: { lang: Locale }) => {
  return (
    <div className="">
      <Navbar lang={lang} />
    </div>
  );
};

export default Header;
