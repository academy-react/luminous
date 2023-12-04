import Link from "next/link";

import { Icons } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

export const Pagination = ({ className }: { className: string }) => {
  return (
    <nav>
      <ul
        className={cn(
          " flex h-10 flex-row-reverse items-center gap-1 rounded-xl bg-card px-5",
          className
        )}
      >
        <li>
          <Link href="#" className="px-2">
            <Icons.leftArrow />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
          >
            1
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2">
            <Icons.rightArrow />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
