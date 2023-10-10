import React from "react";
import Link from "next/link";

const LoginBtn = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="#"
          className="rounded-xl bg-purple-btn px-4 py-1 text-purple-text transition hover:bg-white-primary"
        >
          ورود
        </Link>
        <Link
          href="#"
          className="rounded-xl bg-purple-btn px-4 py-1 text-purple-text transition hover:bg-white-primary"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default LoginBtn;
