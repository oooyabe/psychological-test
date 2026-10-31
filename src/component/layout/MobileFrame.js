'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        w-full
        min-h-[100dvh]
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#2B1D11]
        
        /* 手機直式（預設）：強制 100% 寬高，取消圓角與陰影，完全無灰邊 */
        h-[100dvh]
        
        /* 電腦桌機（sm 斷點以上）：恢復精緻的手機外框、圓角與陰影 */
        sm:h-[min(844px,calc(100dvh-32px))]
        sm:w-[min(390px,calc(100vw-32px))]
        sm:rounded-[32px]
        sm:shadow-2xl
      "
    >
      {children}
    </div>
  );
}