import Image from "next/image";

export const PanelAvatar = () => {
  return (
    <>
      <div className="relative aspect-square w-1/2 rounded-xl">
        <Image
          src="/images/dev/node-red.png"
          fill
          alt="avatar"
          className="rounded-xl object-fill"
        />
      </div>

      <div className="flex flex-col justify-center gap-1 text-sm">
        <h1>فرشته احمدی</h1>
        <h1 className="self-end"> freshte</h1>
      </div>
    </>
  );
};
