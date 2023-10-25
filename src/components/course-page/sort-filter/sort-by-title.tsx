    "use client"

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const SortByTitle = () => {
  return (
    <RadioGroup
      defaultValue="همه ی دوره ها"
      className="flex flex-row-reverse rounded-xl px-4 py-2 shadow-lg"
    >
      <div className={cn("flex items-center space-x-2")}>
        <RadioGroupItem value="همه ی دوره ها" id="r1" />
        <Label htmlFor="r1" className="text-[#666] text-sm">همه ی دوره ها
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="پرمخاطب ها" id="r2" />
        <Label htmlFor="r2" className="text-[#333] text-sm">پرمخاطب ها
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="جدیدترین" id="r3" />
        <Label htmlFor="r3" className="text-[#333] text-sm">جدیدترین ها
        </Label>
      </div>
    </RadioGroup>
  );
};
