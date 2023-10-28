import {type  Locale } from "#/i18n.config";

import NotFoundCard from "./not-found-card";

const NotFound = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <NotFoundCard lang={lang} />
    </>
  );
};
export default NotFound;
