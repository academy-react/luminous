import { useCallback, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { useDebounce } from "use-debounce";

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
import { Skeleton } from "@/components/elements/ui/skeleton";
import { AllCourseFilterDtoType} from '@/core/validators/api';

export const SearchNav = () => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [courseList, setCourseList] = useState<
  AllCourseFilterDtoType | null | undefined
  >();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const router = useRouter();
  useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setCourseList(null);
      return;
    }

    const getCourse = async () => {
      try {
        console.log(query)
        console.log(debouncedQuery);
        const data = await getCoursesByQuery({query: debouncedQuery});

        console.log(data);
        setCourseList(data?.courseFilterDtos);
      } catch (err) {
        console.log(err);
      }
    };

    startTransition(getCourse);

    return () => setCourseList(null);
  }, [debouncedQuery]);

  const handleSelect = useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-primary bg-primary p-1.5 text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
      >
        <Icons.search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="جستجو بر اساس عنوان..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            یافت نشد.
          </CommandEmpty>
          <div className="mx-auto flex justify-center ">
            
            {isPending ? (
              <div className="space-y-1 overflow-hidden px-1 py-2">
                <Skeleton className="h-4 w-10 rounded" />
                <Skeleton className="h-8 rounded-sm" />
                <Skeleton className="h-8 rounded-sm" />
              </div>
            ) : (
              <CommandGroup
                heading="دوره ها"
                className="flex basis-1/2 flex-col items-center py-2 text-purple-primary"
              >
                {courseList?.map((item) => (
                  <CommandItem
                    key={item.courseId}
                    value={item.title}
                    onSelect={() => {
                      handleSelect(() =>
                        router.push(`/courses/${item.courseId}`)
                      );
                    }}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            <div className="divide-x border "></div>
            <CommandGroup
              heading="اخبار و مقالات"
              className="flex basis-1/2 flex-col items-center  py-2 text-purple-primary "
            >
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};
