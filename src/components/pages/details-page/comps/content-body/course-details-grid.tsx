export const CourseDetailsGrid = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-5">
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
    </section>
  );
};

const CourseDetail = () => {
  return (
    <div className="flex items-center gap-x-4 rounded-2xl bg-card p-5 text-black">
      <div className="rounded-lg border-2 border-green-300 p-4"></div>
      <div>
        <h4 className="text-lg font-semibold">تیتر اصلی</h4>
        <p className="mt-0.5 text-xs text-slate-500">توضیحات تکمیلی</p>
      </div>
    </div>
  );
};
