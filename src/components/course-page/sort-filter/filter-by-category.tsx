import { CheckboxGroup } from "@/components/ui/checkbox";
import { Checkboxbtn } from "@/components/common/checkbox-btn";

type FilterByCategoryProps={
  id:string;
  title:string;
}
export const FilterByCategory = ({id, title}:FilterByCategoryProps) => {
  return (
    <CheckboxGroup className="flex flex-col justify-start gap-4 rounded-xl px-8 py-6 text-base  shadow-lg">
      دسته بندی دوره ها
      <Checkboxbtn
        className="flex flex-row gap-2 text-sm"
        id={id}
        label={title}
      />
      
    </CheckboxGroup>
  );
};
