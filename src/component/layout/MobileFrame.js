'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        h-[min(844px,calc(100dvh-32px))]
        w-[min(390px,calc(100vw-32px))]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-2xl
      "
    >
      {children}
    </div>
  );
}