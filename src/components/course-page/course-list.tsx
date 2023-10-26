import { FilterByCategory } from "./sort-filter/filter-by-category";

export const CourseList = () =>{
    return(


    <div className="flex h-[700px] w-full border border-black ">
      <div className="w-[30%] border border-black">
        <div className="w-full rounded-xl p-4 shadow">search</div>
        <div className="w-full rounded-xl p-4 shadow"><FilterByCategory/></div>
      </div>
      <div className="w-[70%] border border-black">
        <div className="w-full rounded-xl p-4 shadow">topMenu</div>
        <div className="w-full rounded-xl p-4 shadow">list</div>
      </div>
    </div>
  );
};
