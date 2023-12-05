import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/assets/icons";

export const CourseSideCard = ({ img }: { img: string }) => {
  return (
    <Link href="#" className="relative flex h-full w-full items-center justify-center bg-gray-200 rounded-xl
    // aspect-video 
    ">
      {/* <Image
        src={img}
        alt="course-picture"
        fill
        className="rounded-lg object-contain md:rounded-xl"
      /> */}
      <Icons.placeholder  className=" w-8 h-8 text-slate-600" />
    </Link>
  );
};
