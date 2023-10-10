import type { Locale } from "#/i18n.config";

import Navbar from "./nav-bar";

const Header = ({ lang }: { lang: Locale }) => {
  return (
    <header>
      <Navbar lang={lang} />
    </header>
  );
};

export default Header;
