import { cn } from "@/lib/utils";

export const ListSearch = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full rounded-xl p-4 shadow", className)}>
    <input type="text"  className="border-none focus:outline-none" placeholder="جستجو..."/>
  </div>
  );
};
