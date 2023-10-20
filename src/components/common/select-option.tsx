import {
  SelectItem
} from "@/components/ui/select";

type SelectOptionProps ={
    value:string;
    title:string;
}
const SelectOption = ({value,title}:SelectOptionProps) => {
  return (
        <SelectItem value={value}>{title}</SelectItem>
  );
};
export default SelectOption;
