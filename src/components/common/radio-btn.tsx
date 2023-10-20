import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

type LabeledRadioGroupItemProps ={
    className:string;
    value:string;
    id:string;
    label:string;
}

const LabeledRadioGroupItem =({className,id,value,label}:LabeledRadioGroupItemProps)=>{
    return(
<div className={cn("flex items-center space-x-2" , className)}>
    <RadioGroupItem value={value} id={id} />
    <Label htmlFor={id}>{label}</Label>
  </div>
    )
}
  
export default LabeledRadioGroupItem