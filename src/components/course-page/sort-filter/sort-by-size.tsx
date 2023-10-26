"use client"


import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons ,type Icon  } from "@/components/utils/icons";
import { LayoutGrid, LayoutList } from "lucide-react";

export const SortBySize = () => {
  return (
    <RadioGroup
      defaultValue="grid-layout"
      className="flex flex-row-reverse "
    >
      <div className={cn("flex items-center space-x-2")}>
        <RadioGroupItem value="grid-layout" id="r1" />
        <Label htmlFor="r1">
          <LayoutGrid/>
        </Label>
      </div>
      <div className={cn("flex appearance-none items-center space-x-2")}>
        <RadioGroupItem value="List-layout" id="r2" />
        <Label htmlFor="r2">
          <LayoutList />
        </Label>
      </div>
    </RadioGroup>
  );
};
