'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="relative isolate flex h-full w-full flex-col items-center justify-start pt-10 overflow-hidden px-5">

        {/* 背景圖片 */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/0.start/bg-3.jpg"
            alt="夢幻童話森林與白兔"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 390px"
            className="object-cover object-bottom"
          />
        </div>

        {/* 柔和暖色濾鏡 */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundColor: 'rgba(255, 244, 223, 0.1)',
          }}
        />

        {/* 頁面主要內容 */}
        <div className="relative z-10 flex w-full flex-col items-center gap-8 mt-4">

          {/* 標題區 */}
          <header className="flex w-full flex-col items-center text-center">
            <p className="mb-2 text-[10px] font-medium tracking-[0.35em] text-[#a6816b]">
              A LITTLE WONDERLAND
            </p>

            <h1
              className="whitespace-nowrap text-[36px] font-black tracking-[0.12em] text-[#805247]"
              style={{
                textShadow:
                  '0 2px 0 #fff9ed, 0 4px 12px rgba(125, 78, 62, 0.12)',
              }}
            >
              仙境迷蹤
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-6 bg-[#c9a18b]/70" />
              <p className="text-[12px] font-semibold tracking-[0.16em] text-[#986e65]">
                尋找內心的靈魂兔子
              </p>
              <span className="h-px w-6 bg-[#c9a18b]/70" />
            </div>
          </header>

          {/* 故事文案 */}
          <section className="flex w-full flex-col items-center text-center">
            <p className="mb-4 text-[11px] tracking-[0.25em] text-[#b18b70]">
              ✦ TICK TOCK, IT IS TIME ✦
            </p>

            <div
              className="text-[13px] font-medium leading-[2.2] tracking-[0.06em] text-[#704e43]"
              style={{
                textShadow: '0 1px 5px rgba(255, 249, 237, 0.95)',
              }}
            >       
              在光影交錯的奇幻仙境
              <br />
              循著心底微光探索未知的自己
            </div>
          </section>
        </div>

        {/* 點擊熱區與情境浮動提示 */}
        <button
          type="button"
          onClick={nextStep}
          className="absolute bottom-[27%] left-[32%] z-30 flex items-center justify-center bg-gradient-to-r from-[#d4a373]/65 to-[#d4a373]/65 px-6 py-2.5 text-[14px] font-bold tracking-widest text-white shadow-[0_4px_15px_rgba(166,124,101,0.3)] border border-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:from-[#d4a373]/95 hover:to-[#a67c65]/95 hover:shadow-[0_6px_20px_rgba(166,124,101,0.5)] active:scale-95 rounded-full"
        >
          跳進樹洞✨
        </button>

        {/* 右下角：兔子的隱形點擊熱區 */}
        <div
          onClick={nextStep}
          aria-label="點擊兔子開始測驗"
          className="absolute bottom-[2%] right-[2%] z-20 h-[35%] w-[45%] cursor-pointer outline-none tap-highlight-transparent"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        />

      </div>
    </MobileFrame>
  );
}