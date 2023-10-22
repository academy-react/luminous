import { CheckboxGroup } from "@/components/ui/checkbox";
import Checkboxbtn from "@/components/common/checkbox-btn";

const FilterByCategory = () => {
  return (
    <CheckboxGroup className="flex flex-col gap-4 justify-start text-base rounded-xl px-8 py-6  shadow-lg">
      دسته بندی دوره ها
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r1" label="فرانت اند" />
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r2" label="بک اند" />
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r3" label="دیتابیس" />
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r4" label="امنیت" />
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r5" label="پایتون" />
      <Checkboxbtn className="flex flex-row gap-2 text-sm" id="r6" label="هوش مصنوعی" />
    </CheckboxGroup>
  );
};
export default FilterByCategory;
