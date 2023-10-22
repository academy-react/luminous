"use client"

import { LayoutGrid, LayoutList } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SortBySize = () => {
  return (
    <RadioGroup
      defaultValue="grid-layout"
      className="flex flex-row-reverse rounded-xl px-4 py-2 shadow-lg"
    >
      <div className={cn("flex items-center space-x-2")}>
        <RadioGroupItem value="grid-layout" id="r1" />
        <Label htmlFor="r1">
          <LayoutGrid />
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
export default SortBySize;
