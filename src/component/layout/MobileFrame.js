'use client';

export default function MobileFrame({ children }) {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-[#2B1D11] p-0 sm:p-4 overflow-hidden">
      <div
        className="
          relative
          flex
          h-[100dvh]
          w-full
          flex-col
          items-center
          justify-between
          overflow-hidden
          bg-white
          
          /* 在平板與電腦桌機（sm 斷點以上）時，強制固定為標準 iPhone 尺寸與圓角外框 */
          sm:h-[844px]
          sm:w-[390px]
          sm:rounded-[32px]
          sm:shadow-2xl
          shrink-0
        "
      >
        {children}
      </div>
    </div>
  );
}