import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type TitleBoxProps = {
  title: string;
  desc: string;
  className: string;
};

const TitleBox = ({ title, desc, className }: TitleBoxProps) => {
  return (
    <Card className={cn(`w-fit rounded-xl px-12 py-2 shadow`, className)}>
      <CardContent className="flex flex-col items-center justify-center text-purple-primary">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TitleBox;
