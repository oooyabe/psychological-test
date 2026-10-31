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
        justify-between
        bg-white
        
        /* 📱 手機真實裝置（預設）：強制滿版、用 bg-white 與 !overflow-hidden 封鎖滾動與灰底 */
        h-[100dvh]
        w-[100vw]
        !overflow-hidden
        
        /* 💻 電腦桌機（sm 斷點以上）：自動恢復精緻的手機外框、圓角與陰影 */
        sm:h-[min(844px,calc(100dvh-32px))]
        sm:w-[min(390px,calc(100vw-32px))]
        sm:rounded-[32px]
        sm:shadow-2xl
        sm:!overflow-hidden
      "
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}