import Image from "next/image";
import Link from "next/link";

const CourseMidCard = () => {
  return (
    <div className="flex w-[25%] flex-col  gap-2 rounded-xl p-4 shadow-lg">
      <Link href="#" className="relative aspect-[3/2]  ">
        <Image
          src="/images/node jd.svg"
          alt=""
          fill
          className="rounded-xl object-cover"
        />
      </Link>
      <div className=" flex flex-col gap-4 ">
        <h2 className="text-xl font-bold ">نود جی اس:دوره کامل</h2>
        <div className="flex justify-between rounded-xl">
          <ul className="flex flex-col justify-start">
            <li>استاد بحرالعلوم</li>
            <li>*****</li>
            <li className="rounded-xl border-2 border-[#58AD57]  px-2  text-[#58AD57] ">
              8500000تومان
            </li>
          </ul>
          <ul className="flex  flex-col rounded-xl px-2 shadow-lg">
            <li className="">1</li>
            <li className=" ">20</li>
            <li className="">30</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CourseMidCard;
