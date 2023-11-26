import { type Locale } from "#/i18n.config";

export const ScheduleTable = ({ lang }: { lang: Locale }) => {
  return (
    <div className="grid h-fit w-full grid-flow-row grid-cols-7 grid-rows-3 border">
      {Array(21)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative flex aspect-square items-center justify-center border"
          >
            {index % 5 === 0 ? (
              <div className="relative z-10 flex h-full w-full rotate-[-10deg] items-center rounded-xl bg-blue-400">
                <p className="absolute end-2 top-2 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-teal-300 text-center text-xs font-semibold text-black">
                  {(index + 1).toLocaleString(lang)}
                </p>
                <p className="flex flex-col items-start justify-center p-3">
                  <span className="text-white">
                    {
                      {
                        fa: "آموزش Next.js",
                        en: "Learning Next.js",
                      }[lang]
                    }
                  </span>
                  <span className="text-xs">
                    {
                      {
                        fa: "۶:۳۰ عصر",
                        en: "6:30 PM",
                      }[lang]
                    }
                  </span>
                </p>
              </div>
            ) : (
              <p className="absolute end-2 top-2 text-sm font-semibold">
                {(index + 1).toLocaleString(lang, {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};
