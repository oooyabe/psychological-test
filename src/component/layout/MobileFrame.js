
'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        h-[100dvh]
        min-h-0
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-white
        sm:h-[min(844px,calc(100dvh-32px))]
        sm:w-[min(390px,calc(100vw-32px))]
        sm:rounded-[32px]
        sm:shadow-xl
      "
    >
      {children}
    </div>
  );
}
