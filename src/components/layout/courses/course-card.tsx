import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/button";

const CourseCard = () => {
  return (
    <div className="h-[450px]   w-[550px] rounded-xl border border-purple-primary shadow-lg">
      <Link href="#">
        <Image
          src="/images/node jd.svg"
          alt=""
          width={525}
          height={300}
          className="mx-auto pt-4"
        />
      </Link>
      <div>
        <div>
          <Link href="#">
            <h2>نود جی اس:دوره کامل</h2>
          </Link>
          <div>آرمان ساکت</div>
        </div>
        <p className="line-clamp-2">
          در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه
          داریم و همیشه در دسترس شما قرار دهیم؛ ا استفاده کنید
        </p>
        <Button href={"#"} style={""} title={"جزییات دوره"} />
      </div>
    </div>
  );
};
export default CourseCard;
