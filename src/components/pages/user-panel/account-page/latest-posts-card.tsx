import { CalendarPlus } from "lucide-react";

import { cn } from "@/lib/utils";

export const LatestUpdatesCard = ({
  index,
  post,
}: {
  index: number;
  post: {
    courseTitle: string;
    update: string;
  };
}) => {
  const colors = [
    "bg-emerald-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-red-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-green-400",
    "bg-gray-400",
    "bg-black",
  ];

  return (
    <div
      className={cn(
        "flex w-60 snap-start flex-col gap-2 rounded-2xl bg-emerald-400 p-4",
        colors[index % colors.length]
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-white">
          {post.courseTitle}
        </span>
        <CalendarPlus className="text-white" />
      </div>
      <span className="text-lg font-extrabold text-white">{post.update}</span>
    </div>
  );
};
