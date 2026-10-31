'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        fixed
        inset-0
        w-full
        h-full
        max-w-[390px]
        flex
        flex-col
        items-center
        justify-between
        bg-white
        overflow-hidden
        mx-auto
        touch-none
        select-none
      "
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-white touch-none">
        {children}
      </div>
    </div>
  );
}