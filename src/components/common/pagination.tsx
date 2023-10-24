import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = () => {
  return (
    <nav>
      <ul className="flex flex-row-reverse items-center gap-1">
        <li>
          <Link
            href="#"
            className="rounded-full border hover:border-purple-primary "
          >
            <ChevronLeft />
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
          <Link
            href="#"
            className="rounded-full border hover:border-purple-primary"
          >
            <ChevronRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
