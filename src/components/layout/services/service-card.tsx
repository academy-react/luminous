import React from "react";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <>
      <div className="flex h-[90px] w-[200px] flex-row items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-[#F1C40F] to-[#e8d06e]">
        <div className="relative right-[10px] aspect-square  w-full  basis-1/3 ">
          <Image src={img} alt="picture" fill className=" " />
        </div>
        <p className=" text-white basis-2/3 text-lg font-bold"> {desc}</p>
      </div>
    </>
  );
};

export default ServiceCard;
