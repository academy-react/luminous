import Image from "next/image";
import Link from "next/link";

type CourseMiniCardProps= {
image: string;
}
export const CourseMiniCard = ({image}:CourseMiniCardProps) => {
  return (
    <Link href="#" className="relative aspect-video w-full">
      <Image
        src={image}
        alt="course-picture"
        fill
        className="rounded-xl object-contain"
      />
    </Link>
  );
};
