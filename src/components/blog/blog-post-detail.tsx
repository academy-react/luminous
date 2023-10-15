import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type BlogPostDetailsProps = {
  lang: Locale;
  Icon: LucideIcon;
  text: string;
};

const BlogPostDetails = ({ lang, Icon, text }: BlogPostDetailsProps) => {
  return (
    <div
      className={cn(
        "flex w-fit gap-1",
        lang === "en" ? "items-start" : "items-center"
      )}
    >
      <Icon />
      <h4 className="p-0.5">{text}</h4>
    </div>
  );
};

export default BlogPostDetails;
