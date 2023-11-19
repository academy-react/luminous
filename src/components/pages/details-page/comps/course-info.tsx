import { Button, H1 } from "@/components/elements/ui";

import { type CourseIdType } from "@/core/validators/api";
import { toPersianDigits } from "@/lib/utils";

export const CourseInfo = ({
  data: { title, describe, cost },
}: {
  data: CourseIdType;
}) => {
  return (
    <section className="my-10 flex justify-between gap-x-10">
      <div className="flex w-full flex-col justify-between">
        <div className="">
          <H1 className="text-3xl font-bold">{title}</H1>
          <p className="mt-3.5 line-clamp-4 text-xl font-light">{describe}</p>
        </div>
        <div className="flex items-center justify-between">
          <Button className="rounded-2xl border-4 border-green-500 bg-green-500 px-5 py-7 text-3xl font-extrabold text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
            شرکت در دوره
          </Button>
          <span className="text-2xl font-semibold">
            {toPersianDigits(String(cost))} تومان
          </span>
        </div>
      </div>
      <div className="aspect-video h-[360px] rounded-xl bg-indigo-950"></div>
    </section>
  );
};
