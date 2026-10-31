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
      {/* 🌟 讓背景圖層固定在最底層，絕對不會跟著內容上下滾動或消失 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/你的背景圖片路徑.jpg')" }}
      />

      {/* 上層內容區塊（帶有 relative 與 z-10 確保蓋在背景之上） */}
      <div className="relative z-10 flex h-full w-full flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}