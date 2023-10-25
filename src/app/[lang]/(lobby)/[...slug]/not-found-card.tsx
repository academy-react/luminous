import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

const NotFoundCard = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <div className="mx-auto  flex w-1/3 flex-col items-center  ">
        <div className="relative aspect-[2/1] w-full ">
          <Image
            alt="404-bg"
            src="/images/artworks/404.svg"
            fill
            className="object-contain"
          />
        </div>
        <Link
          href={`/${lang}`}
          className=" rounded-xl border-2 bg-[#A644C1] px-4 py-1 text-base text-white"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
};
export default NotFoundCard;
