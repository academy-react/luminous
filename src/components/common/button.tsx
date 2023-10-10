import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  style: string;
  title: string;
}
const Button = ({ href, style, title }: ButtonProps) => {
  return (
    <div>
      <Link
        href={href}
        className={cn("rounded-xl border  px-2 py-1   font-bold  ", style)}
      >
        {title}
      </Link>
    </div>
  );
};

export default Button;
