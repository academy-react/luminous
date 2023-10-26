    "use client"

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const SortByTitle = () => {
  return (
    <RadioGroup
      defaultValue="همه ی دوره ها"
      className="flex flex-row-reverse"
    >
      <div className={cn("flex items-center space-x-2")}>
        <RadioGroupItem value="همه ی دوره ها" id="s1" />
        <Label htmlFor="s1" className="text-[#666] text-sm">همه ی دوره ها
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="پرمخاطب ها" id="s2" />
        <Label htmlFor="s2" className="text-[#333] text-sm">پرمخاطب ها
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="جدیدترین" id="s3" />
        <Label htmlFor="s3" className="text-[#333] text-sm">جدیدترین ها
        </Label>
      </div>
    </RadioGroup>
  );
};
