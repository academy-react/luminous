import React from "react";
import Link from "next/link";

const LoginBtn = () => {
  return (
    <div>
      <div className="m-5 w-fit rounded-xl border shadow-sm">
        <Link
          href="#"
          className="rounded-r-xl bg-neutral-50 px-4 py-1 transition hover:bg-neutral-100"
        >
          ورود
        </Link>
        <Link
          href="#"
          className="m-0 rounded-l-xl bg-red-500 px-4 py-1 text-white-primary transition hover:bg-red-600"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default LoginBtn;
