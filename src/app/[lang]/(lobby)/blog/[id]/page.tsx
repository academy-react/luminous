"use client";

import { useState } from "react";

import { CalendarDays, ChevronUp, Eye, Hash, User2 } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { cn } from "@/lib/utils";
import { blogDetails } from "@/dict/lobby/blog.dict";

import BlogPostDetails from "@/components/blog/blog-post-detail";

import { type Locale } from "#/i18n.config";

const BlogIDPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  const details = blogDetails[id];
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <main className="flex w-full items-start justify-center gap-8 px-10 pb-10 pt-20">
      {details && (
        <div className="flex min-h-full w-3/4 flex-col items-center gap-7 rounded-md border p-10 shadow">
          <div className="flex w-full items-center justify-between text-xl">
            <BlogPostDetails
              lang={lang}
              Icon={User2}
              text={details.teacher[lang]}
            />
            <div
              className={cn(
                "flex gap-4",
                lang === "en" ? "items-start" : "items-center"
              )}
            >
              <BlogPostDetails
                lang={lang}
                Icon={Hash}
                text={details.category[lang]}
              />
              <BlogPostDetails lang={lang} Icon={Eye} text={details.views} />
              <BlogPostDetails
                lang={lang}
                Icon={CalendarDays}
                text={details.date}
              />
              <div className="text-2xl" onClick={() => setLiked(!liked)}>
                {liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </div>
            </div>
          </div>
          <div className="aspect-video w-3/4 rounded-lg bg-slate-200" />
          <h3 className="w-full text-3xl font-bold">{details.title[lang]}</h3>
          <p className="text-lg">{details.text[lang]}</p>
        </div>
      )}
      <div className="h-full w-1/4 rounded-md border px-10 py-7 shadow">
        <div className="flex w-full flex-col items-center justify-center gap-7">
          <p className="text-2xl font-bold">
            {
              {
                fa: "درباره استاد",
                en: "About teacher",
              }[lang]
            }
          </p>
          {details && (
            <>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="aspect-square w-20 rounded-full bg-slate-200" />
                  <p className="text-2xl">{details.teacher[lang]}</p>
                </div>
                <ChevronUp
                  onClick={() => setOpen(!open)}
                  className={cn(open ? "rotate-180" : "rotate-0")}
                />
              </div>
              {open && (
                <p>
                  {
                    {
                      fa: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
                      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.",
                    }[lang]
                  }
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogIDPage;
