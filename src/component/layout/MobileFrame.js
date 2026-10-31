'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        w-full
        h-[100dvh]
        flex-col
        items-center
        justify-between
        bg-white
        overflow-hidden
        mx-auto
      "
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}