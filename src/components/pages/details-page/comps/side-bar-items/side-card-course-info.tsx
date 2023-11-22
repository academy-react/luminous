import { Icons, type Icon } from "@/components/assets/icons";

import { type CourseIdType } from "@/core/validators/api";
import { cn, toPersianDigits } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type CourseInfoSideCardProps = {
  lang: Locale;
  data: CourseIdType;
};

export const CourseInfoSideCard = ({
  lang,
  data: { currentRegistrants, currentRate },
}: CourseInfoSideCardProps) => {
  return (
    <div className="shadow-light rounded-2xl bg-card p-5">
      <div className="flex gap-5">
        <DetailCard
          text={lang === "fa" ? "دانشجو" : "Student"}
          num={
            lang === "fa"
              ? toPersianDigits(currentRegistrants)
              : currentRegistrants
          }
          Icon={Icons.usersFill}
          iconColor="fill-green-500"
        />
        <DetailCard
          text={lang === "fa" ? "رضایت" : "Satisfaction"}
          num={lang === "fa" ? toPersianDigits(currentRate) : currentRate}
          Icon={Icons.starFilled}
          iconColor="fill-yellow-400"
        />
      </div>
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xl text-zinc-700">
          <span>
            {
              {
                fa: "میزان پیشرفت دوره",
                en: "Course Progress",
              }[lang]
            }
          </span>
          <span>
            {
              {
                fa: "۴۰%",
                en: "40%",
              }[lang]
            }
          </span>
        </div>
        <div className="h-2 w-full rounded-xl bg-zinc-100"></div>
      </div>
    </div>
  );
};

const DetailCard = ({
  num,
  text,
  Icon,
  iconColor,
}: {
  Icon: Icon;
  iconColor: string;
  text: string;
  num: number | string;
}) => {
  return (
    <div className="flex grow items-center justify-between rounded-2xl bg-gray-100 px-5 py-4">
      <Icon className={cn("h-10 w-10", iconColor)} />
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-zinc-700">{num}</span>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
};
