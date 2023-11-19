export const CourseInfoSideCard = () => {
  return (
    <div className="shadow-light rounded-2xl bg-card p-5">
      <div className="flex gap-5">
        <DetailCard />
        <DetailCard />
      </div>
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xl text-zinc-700">
          <span>درصد تکمیل دوره</span>
          <span>۱۳٪</span>
        </div>
        <div className="h-2 w-full rounded-xl bg-zinc-100"></div>
      </div>
    </div>
  );
};

const DetailCard = () => {
  return (
    <div className="flex grow items-center justify-between rounded-2xl bg-gray-100 px-5 py-4">
      <div className="rounded-xl border-2 bg-green-500 p-4"></div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-zinc-700">۱۲۳۴</span>
        <p className="text-sm text-slate-500">دانشجو</p>
      </div>
    </div>
  );
};
