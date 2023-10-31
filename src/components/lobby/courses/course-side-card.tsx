import Image from "next/image";
import Link from "next/link";

export const CourseSideCard = () => {
  return (
    <Link href="#" className="relative aspect-video w-full">
      <Image
        src="/images/dev/node-js.jpg"
        alt="course-picture"
        fill
        className="rounded-lg object-contain md:rounded-xl"
      />
    </Link>
  );
};
