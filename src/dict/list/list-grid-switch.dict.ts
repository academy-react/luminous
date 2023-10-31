import { LayoutGrid, LayoutList, type LucideIcon } from "lucide-react";

export type switchedListStates = "grid" | "list";

export interface GridListSwitcherProps {
  id: number;
  Icon: LucideIcon;
  name: switchedListStates;
}

export const gridListSwitcher: GridListSwitcherProps[] = [
  {
    id: 1,
    Icon: LayoutGrid,
    name: "grid",
  },
  {
    id: 2,
    Icon: LayoutList,
    name: "list",
  },
];
