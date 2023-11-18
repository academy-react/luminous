import { useState, useTransition } from "react";

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

import { cn } from "@/lib/utils";

export const SearchNav = () => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-primary bg-primary p-1.5 text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
      >
        <Icons.search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No results found.
          </CommandEmpty>
          <div className="flex">
            <CommandGroup
              heading="Suggestions"
              className="text-purple-primary "
            >
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>

            <div className="divide-x border "></div>
            <CommandGroup
              heading="Settings"
              className="text-purple-primary "
            ></CommandGroup>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};
