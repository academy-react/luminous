import { type Icon } from "@/components/assets/icons";

import { type CourseIdType } from "@/core/validators/api";
import { toPersianDigits } from "@/lib/utils";

export const CourseInfoSideCard = ({
  data: { currentRegistrants },
}: {
  data: CourseIdType;
}) => {
  return (
    <div className="shadow-light rounded-2xl bg-card p-5">
      <div className="flex gap-5">
        <DetailCard
          text="دانشجو"
          num={toPersianDigits(String(currentRegistrants))}
        />
        <DetailCard text="رضایت" num="۱۳٪" />
      </div>
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xl text-zinc-700">
          <span>درصد تکمیل دوره</span>
          <span>۱۳٪</span>
        </div>
        <div className="h-2 w-full rounded-xl bg-zinc-100"></div>
      </div>
    </div>
  );
};

const DetailCard = ({
  num,
  text,
}: {
  icon?: Icon;
  text: string;
  num: number | string;
}) => {
  return (
    <div className="flex grow items-center justify-between rounded-2xl bg-gray-100 px-5 py-4">
      <div className="rounded-xl border-2 bg-green-500 p-4"></div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-zinc-700">{num}</span>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
};