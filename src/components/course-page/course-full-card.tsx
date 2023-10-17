import Image from "next/image";
import Link from "next/link";

const CourseFullCard = () => {
  return (
    <div className="flex ">
      <Link href="#" className="relative aspect-[2/1] w-full ">
        <Image
          src="/images/node jd.svg"
          alt=""
          fill
          className=" object-contain "
        />
      </Link>
      <div className="border border-black">
        <div className="border border-black">
          <h2 className="text-2xl font-bold">نود جی اس:دوره کامل</h2>
          <p className="w-[70%] text-base text-[#707070]">
            متون کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذش سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="border border-black">جزییات چپ</div>
        </div>
        <div className="border border-black"> جزییات پایین</div>
      </div>
    </div>
  );
};
export default CourseFullCard;
