'use client';

export default function MobileFrame({ children }) {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-[#2B1D11] p-4 overflow-hidden">
      <div
        className="
          relative
          flex
          h-[844px]
          w-[390px]
          flex-col
          items-center
          justify-between
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-2xl
          shrink-0
        "
      >
        {children}
      </div>
    </div>
  );
}