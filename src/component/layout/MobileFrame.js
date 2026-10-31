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
        bg-[#2B1D11]
        
        /* 📱 手機真實裝置（預設）：強制滿版、用 !overflow-hidden 強制封鎖所有上下滑動與滾輪 */
        h-[100dvh]
        min-h-[100dvh]
        !overflow-hidden
        
        /* 💻 電腦桌機（sm 斷點以上）：自動恢復精緻的手機外框、圓角與陰影 */
        sm:h-[min(844px,calc(100dvh-32px))]
        sm:w-[min(390px,calc(100vw-32px))]
        sm:rounded-[32px]
        sm:shadow-2xl
        sm:!overflow-hidden
      "
    >
      {/* 🌟 額外加上一層 overflow-hidden，強制包住所有子頁面，確保絕不出框、絕不出現滾輪 */}
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}