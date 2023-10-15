import { Card, CardContent } from "../ui/card";

const TitleBox = () => {
  return (
    <div>
      <Card className="rounded-xl px-4 py-2 shadow">
        <CardContent className="flex flex-col justify-center text-purple-primary">
          <h2 className=" text-xl font-bold">خدمات</h2>
          <p className="text-base">تمام آنچه نیاز دارید</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TitleBox;
