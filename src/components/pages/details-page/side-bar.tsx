export const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-[5.4rem] shrink-0 space-y-5">{children}</div>
  );
};
