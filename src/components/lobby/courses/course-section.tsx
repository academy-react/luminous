import CourseCard from "./course-card";
import SideCard from "./course-side-card";

const CourseSection = () => {
  return (
    <>
      <div className="flex  w-full gap-8 px-28">
        <div className="w-[70%]  rounded-xl shadow-xl">
          <CourseCard />
        </div>
        <div className="w-[30%]  rounded-xl shadow-xl">
          <div className="flex h-full w-full flex-col gap-3 p-3">
            <SideCard />
            <SideCard />
            <SideCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseSection;
