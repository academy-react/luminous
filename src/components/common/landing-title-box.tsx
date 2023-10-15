import { cn } from "@/lib/utils";

import { Card, CardContent } from "../ui/card";

type TitleBoxProps = {
  title: string;
  desc: string;
  className: string;
};
const TitleBox = ({ title, desc, className }: TitleBoxProps) => {
  return (
    <div>
      <Card className={cn(`rounded-xl px-4 py-2 shadow`, className)}>
        <CardContent className="flex flex-col justify-center text-purple-primary">
          <h2 className=" text-xl font-bold">{title}</h2>
          <p className="text-base">{desc}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TitleBox;
