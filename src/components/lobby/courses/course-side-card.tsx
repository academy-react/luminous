import Image from "next/image";
import Link from "next/link";

const SideCard = () => {
  return (
    <>
      <Link href="#" className="relative aspect-[2/1] w-full ">
        <Image
          src="/images/node jd.svg"
          alt=""
          fill
          className=" object-contain "
        />
      </Link>
    </>
  );
};
export default SideCard;
