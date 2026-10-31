'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        w-full
        min-h-[100svh]
        flex-col
        items-center
        justify-between
        bg-white
        overflow-hidden
        mx-auto
      "
    >
      <div className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}