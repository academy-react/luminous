import { Fragment } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { type Locale } from "#/i18n.config";

type NewsCardProps = {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  content: {
    image: string;
    text: {
      [key in Locale]: string;
    };
  }[];
};
export const NewsCard = ({ lang, title, content: contents }: NewsCardProps) => {
  return (
    <Card className="container relative w-full max-w-lg border px-4 pt-12">
      <CardTitle className="absolute -start-4 -top-4 w-fit rounded-xl border bg-white px-7 py-2 text-lg font-semibold shadow">
        {title[lang]}
      </CardTitle>
      <CardContent>
        <div className="flex max-w-lg flex-col items-center gap-3">
          {contents.map((content, index) => (
            <Fragment key={index}>
              <div className="flex w-full items-center gap-5">
                <Image
                  src={content.image}
                  alt="news-item"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <p className="line-clamp-1 text-sm">{content.text[lang]}</p>
              </div>
              {index !== contents.length - 1 && (
                <div className="w-5/6 border" />
              )}
            </Fragment>
          ))}
        </div>
        <div className="flex w-full justify-end pb-4">
          <Button className="rounded-lg border border-purple-primary bg-white px-4 py-3 font-medium shadow transition-colors duration-500 hover:bg-purple-primary hover:text-white">
            {
              {
                en: "More",
                fa: "بیشتر",
              }[lang]
            }
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
