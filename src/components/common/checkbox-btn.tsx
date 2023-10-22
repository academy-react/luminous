
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"

type CheckboxBtnProps={
    id:string;
    className:string;
    label:string;
}

export const Checkboxbtn = ({id,className,label}:CheckboxBtnProps)=> {
  return (
  <div className={cn( className)} >
      <Checkbox id={id}/>
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      {label}
      </Label>
  </div>
  )
}
