import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const CourseCard = () => {
  return (
    <div className="flex h-full w-full flex-col  gap-4  py-3">
      <Link href="#" className="relative aspect-[2/1] w-full ">
        <Image
          src="/images/node jd.svg"
          alt=""
          fill
          className=" object-contain "
        />
      </Link>
      <div className=" flex w-full items-center justify-between px-5">
        <h2 className="text-2xl font-bold">نود جی اس:دوره کامل</h2>
        <h4 className="text-lg text-[#707070]">آرمین ساکت</h4>
      </div>
      <div className=" flex w-full  items-end justify-between px-5">
        <p className="w-[70%] text-base text-[#707070]">
          متون کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذش سوالات پیوسته
          اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <Button className=" rounded-xl border-2 border-purple-primary p-1 text-purple-primary ">
          <Link href="#" className="">
            مشاهده بیشتر
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
