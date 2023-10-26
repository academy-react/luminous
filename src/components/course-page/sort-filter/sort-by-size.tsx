"use client"


import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/utils/icons";

export const SortBySize = () => {
  return (
    <RadioGroup
      defaultValue="grid-layout"
      className="flex flex-row-reverse "
    >
      <div className={cn("flex items-center space-x-2")}>
        <RadioGroupItem value="grid-layout" id="b1" />
        <Label htmlFor="b1">
          <Icons.layoutGrid/>
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="List-layout" id="b2" />
        <Label htmlFor="b2">
          <Icons.layoutList />
        </Label>
      </div>
    </RadioGroup>
  );
};
