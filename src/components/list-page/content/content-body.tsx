import { BlogFullCard } from "@/components/blog-page/cards/blog-full-card";
import { CourseFullCard } from "@/components/course-page/cards/course-full-card";
import { CourseMidCard } from "@/components/course-page/cards/course-mid-card";

import { Locale } from "#/i18n.config";

type ContentBodyProps = {
  lang: Locale;
  selectedOption: number;
  FullCard: typeof CourseFullCard | typeof BlogFullCard;
};

export const ContentBody = ({
  lang,
  selectedOption,
  FullCard,
}: ContentBodyProps) => {
  return (
    <div className="rounded-xl p-4 shadow">
      {/* <div className={cn(""),}>
      {data.map(()=>(
        {
            selectedType === grid ? <MidCard/>:<FullCard/>
        }
    ))} 
      </div> */}
    </div>
  );
};
