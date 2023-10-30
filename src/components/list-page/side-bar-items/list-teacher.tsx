import { cn } from "@/lib/utils";

export const ListTeacher = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full rounded-xl p-4 shadow", className)}>
      <input type="text"  className="border-none focus:outline-none" placeholder="جستجو بر اساس مدرس"/>
    </div>
  );
};
