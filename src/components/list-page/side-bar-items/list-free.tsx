import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { type Locale } from "#/i18n.config";

export const ListFree = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl p-4 shadow">
      <Label htmlFor="list-free">
        {lang === "fa" ? "فقط دوره های رایگان" : "Just free courses"}
      </Label>
      <Switch
        id="list-free"
        className="bg-[#ccc] data-[state=checked]:bg-purple-secondary"
      />
    </div>
  );
};
