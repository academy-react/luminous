import {LayoutGrid, LayoutList,type  LucideIcon } from "lucide-react";

export interface GridListSwitcherProps{
    id:number;
    Icon: LucideIcon;
}

export const gridListSwitcher:GridListSwitcherProps[]=[
    {
        id: 1,
        Icon: LayoutGrid,
},
{
    id: 2,
    Icon: LayoutList,
},
]