import Link from "next/link";

import { Icons } from "../utils/icons";

export const Pagination = () => {
  return (
    <nav>
      <ul className="flex flex-row-reverse items-center gap-1">
        <li>
          <Link
            href="#"
            className="px-2"
          >
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
          <Link
            href="#"
            className="px-2"
          >
            <Icons.rightArrow/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
