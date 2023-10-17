import Image from "next/image";
import Link from "next/link";

const CourseFullCard = () => {
  return (
    <div className="flex h-[200px] w-full  gap-4 rounded-xl p-4 shadow-lg">
      <Link href="#" className="relative aspect-square basis-1/3 ">
        <Image
          src="/images/node jd.svg"
          alt=""
          fill
          className="rounded-xl object-cover"
        />
      </Link>
      <div className="h-full basis-2/3 border border-black ">
        <div className="flex justify-between border border-black ">
          <div className="flex flex-col gap-2 border border-black">
            <h2 className="text-2xl font-bold">نود جی اس:دوره کامل</h2>
            <p className="w-[70%] text-base text-[#707070]">
              متون کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذش سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <ul className="flex flex-col rounded-xl border border-black ">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className="flex items-end  justify-between  border border-black  pt-10">
          <ul className="flex gap-4">
            <li>مدرس:استاد بحرالعلوم</li>
            <li>مدت زمان دوره:80ساعت</li>
            <li>*****</li>
          </ul>

          <span>8500000تومان</span>
        </div>
      </div>
    </div>
  );
};
export default CourseFullCard;
