import Image from "next/image";
import Link from "next/link";

export const CourseSideCard = ({ img }: { img: string }) => {
  return (
    <Link href="#" className="relative aspect-video w-full">
      <Image
        src={img}
        alt="course-picture"
        fill
        className="rounded-lg object-contain md:rounded-xl"
      />
    </Link>
  );
};
