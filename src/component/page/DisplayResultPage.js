'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function DisplayResultPage({ nextStep }) {
  return (
    <>
      <MobileFrame>
        <main className="relative flex h-full w-full flex-col justify-between overflow-hidden text-[#513D2B] bg-white">

          {/* 背景圖片層：滿版鋪滿，營造沉浸式童話仙境氛圍 */}
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Image 
              src="/3/result-bg.jpg" 
              alt="Display Result Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* 🌟 統一亮粉與魔法粒子層 */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            <span className="absolute left-[18%] top-[24%] animate-ping text-xs text-[#E4C590] opacity-80 duration-1000">✦</span>
            <span className="absolute right-[20%] top-[22%] animate-ping text-xs text-[#E4C590] opacity-80 duration-1000" style={{ animationDelay: '400ms' }}>✦</span>
            <span className="absolute left-[25%] top-[68%] animate-ping text-[10px] text-[#F3E5CE] opacity-90 duration-1000" style={{ animationDelay: '300ms' }}>✦</span>
            <span className="absolute right-[25%] top-[66%] animate-ping text-[10px] text-[#F3E5CE] opacity-90 duration-1000" style={{ animationDelay: '700ms' }}>✦</span>
          </div>

          {/* 內容區塊 */}
          <section className="relative z-20 flex h-full w-full flex-col justify-between px-8 py-6 sm:px-10 sm:py-8">
            
            {/* 上方標題區塊 */}
            <div className="mt-1 flex flex-col items-center text-center">
              <h2 className="font-serif text-[18px] font-bold tracking-[0.15em] text-[#593E2B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                顯示我的靈魂兔子
              </h2>
            </div>

            {/* 腳印區塊：將 right-6 改為 right-24，讓腳印整體明顯往左移動 */}
            <div className="absolute bottom-6 right-10 z-30 flex items-center justify-center">
              <button
                type="button"
                onClick={nextStep}
                aria-label="查看結果"
                className="
                  group relative flex items-center justify-center
                  p-3 cursor-pointer
                  transition-all duration-300
                  hover:scale-125
                  active:scale-95
                  animate-bounce
                  focus-visible:outline-none
                "
              >
                {/* 🐰 純 CSS 繪製的兔子腳印（帶有柔和半透明色澤與微光） */}
                <div className="relative h-8 w-7 drop-shadow-[0_2px_4px_rgba(120,95,60,0.25)] transition-all duration-300 group-hover:brightness-110">
                  
                  {/* 大主掌印 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4.5 w-6 rounded-[50%] bg-[#8C6D53]/85" />

                  {/* 上方三個小趾印 */}
                  <div className="absolute top-0.5 left-0.5 h-3 w-1.5 rounded-[50%] bg-[#8C6D53]/85 -rotate-12" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-1.5 rounded-[50%] bg-[#8C6D53]/85" />
                  <div className="absolute top-0.5 right-0.5 h-3 w-1.5 rounded-[50%] bg-[#8C6D53]/85 rotate-12" />
                </div>

                {/* 點擊引導的微光呼吸環特效 */}
                <span className="absolute inset-0 rounded-full border border-[#C8A86D] animate-ping opacity-30 pointer-events-none" />
              </button>
            </div>

          </section>

        </main>
      </MobileFrame>
    </>
  );
}