"use client";

import Link from "next/link";

import { Icons } from "@/components/assets/icons";
import { cn, generatePagination } from "@/lib/utils";
import { CourseByPaginationType } from "@/core/validators/api";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export const Pagination = (
  {className , totalCount}
  :{className:string; totalCount: CourseByPaginationType;}
  ) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('PageNumber')) || 1;
  
    const createPageURL = (pageNumber: number | string=1) => {
      const params = new URLSearchParams(searchParams);
      params.set('PageNumber', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalCount);

    return (
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
  
        <div className="flex -space-x-px">
          {allPages.map((page:string, index:number) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;
  
            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';
  
            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>
  
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalCount}
        />
      </div>
    );
  }
  
  function PaginationNumber({
    page,
    href,
    isActive,
    position,
  }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
  }) {
    const className = clsx(
      'flex h-10 w-10 items-center justify-center text-sm text-purple-primary border bg-card',
      {
        'rounded-r-md': position === 'first' || position === 'single',
        'rounded-l-md': position === 'last' || position === 'single',
        'z-10  text-white': isActive,
        'hover:border-purple-primary ': !isActive && position !== 'middle',
        'text-gray-300': position === 'middle',
      },
    );
  
    return isActive || position === 'middle' ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  }
  
  function PaginationArrow({
    href,
    direction,
    isDisabled,
  }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
  }) {
    const className = cn(
      'flex h-10 w-10 items-center justify-center rounded-md border mx-auto bg-card',
      {
        'pointer-events-none text-gray-300': isDisabled,
        'hover:bg-gray-100': !isDisabled,
        'ml-2 md:ml-4': direction === 'left',
        'mr-2 md:mr-4': direction === 'right',
      },
    );
  
    const icon =
      direction === 'right' ? (
        <ArrowLeftIcon className="w-4" />
      ) : (
        <ArrowRightIcon className="w-4" />
      );
  
    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link className={className} href={href}>
        {icon}
      </Link>
    );
  }

//   return (
//     <nav >
//       <ul className={cn(" bg-card rounded-xl h-10 px-5 flex flex-row-reverse items-center gap-1",className)}>
//         <li>
//           <Link href="#" className="px-2">
//             <Icons.leftArrow 
//               href={createPageURL(currentPage - 1)}
//               // isDisabled={currentPage <= 1}
            
//             />
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="#"
//             className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
//           >
//             1
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="#"
//             className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
//           >
//             1
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="#"
//             className="rounded-full  border px-2  hover:border-purple-primary focus:bg-purple-primary "
//           >
//             1
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="px-2">
//             <Icons.rightArrow />
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
