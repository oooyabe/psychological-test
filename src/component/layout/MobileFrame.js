'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        overflow-x-hidden
        overflow-y-auto
        bg-[#2B1D11]
        
        /* 📱 手機真實裝置（預設）：強制 100% 寬高、無圓角、無陰影，完美滿版無灰邊 */
        h-[100dvh]
        min-h-[100dvh]

        /* 💻 電腦桌機（sm 斷點以上）：自動變成精緻的手機外框、圓角與陰影 */
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