import { Label } from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxBtnProps = {
  id: string;
  className: string;
  label: string;
};

export const Checkboxtn = ({ id, className, label }: CheckboxBtnProps) => {
  return (
    <>
      <Checkbox id={id} />
      <Label
        htmlFor={id}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
      >
        {label}
      </Label>
    </>
  );
};
