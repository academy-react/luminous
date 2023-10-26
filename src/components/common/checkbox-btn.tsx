import { Label } from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxBtnProps = {
  id: string;
  className: string;
  title: string;
};

export const Checkboxbtn = ({id,className,title}:CheckboxBtnProps)=> {
  return (
  <div className={cn( className)} >
      <Checkbox id={id}/>
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </Label>
  </div>
  )
}
