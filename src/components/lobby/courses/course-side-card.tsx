import Image from "next/image";
import Link from "next/link";

const SideCard = () => {
  return (
    <Link href="#" className="relative aspect-video w-full">
      <Image
        src="/images/dev/node-js.jpg"
        alt="course-picture"
        fill
        className="rounded-xl object-contain"
      />
    </Link>
  );
};
export default SideCard;
