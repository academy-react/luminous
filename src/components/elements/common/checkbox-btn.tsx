import { Label } from "@radix-ui/react-label";

import { Checkbox } from "@/components/elements/ui";

import { cn } from "@/lib/utils";

type CheckboxBtnProps = {
  id: string;
  className: string;
  title: string;
};

export const Checkboxbtn = ({ id, className, title }: CheckboxBtnProps) => {
  return (
    <div className={cn(className)}>
      <Checkbox id={id} />
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </Label>
    </div>
  );
};
