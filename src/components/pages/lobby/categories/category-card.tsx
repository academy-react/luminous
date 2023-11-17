import { Card, CardContent, CardTitle } from "@/components/elements/ui";
import { categoriesColorDict } from "@/dict/pages/lobby.dict";

import { cn } from "@/lib/utils";


import { Home } from "lucide-react";

type CategoryCardProps = {
  title: string;
  icon: string;
   color: string;
};

export const CategoryCard = ({
  title,
  icon,
  color,
}: CategoryCardProps) => {
  
  return (
  
    <Card 
      className={cn(
        "flex items-center justify-center bg-card px-7 py-4 sm:px-8 lg:h-28 lg:w-48",
     color
      )}
    >
           <CardContent className={cn("flex flex-col items-center justify-center gap-2",
      
      )}
      >
        {/* <Icon className="h-10 w-10 lg:h-14 lg:w-14" /> */}
        <i>{icon? icon: <Home className="h-10 w-10 lg:h-14 lg:w-14" />}</i>
        <CardTitle className="text-center text-sm font-extrabold">
          {title}
        </CardTitle>
      </CardContent>
     
   
    </Card>
  );
};
