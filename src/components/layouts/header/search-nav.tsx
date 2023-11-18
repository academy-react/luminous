import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components/elements/ui";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/elements/ui/command";
import { Icons } from "@/components/assets/icons";

import { getCoursesByQuery } from "@/core/services/api";
import { cn } from "@/lib/utils";

export const SearchNav = () => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [courseList, setCourseList] = useState();
  const getCourseQuery = async () => {
    const courses = await getCoursesByQuery();
    setCourseList(courses);
    console.log("coursssssssssssssssssssss: ",courses);
  };

  
  useEffect(() => {
    getCourseQuery();
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-primary bg-primary p-1.5 text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
      >
        <Icons.search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="جستجو بر اساس عنوان..." />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            یافت نشد.
          </CommandEmpty>
          <div className="flex">
            <CommandGroup
              heading="اخبار و مقالات"
              className="text-purple-primary "
            >
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>

            <div className="divide-x border "></div>
            <CommandGroup heading="دوره ها" className="text-purple-primary ">
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};
