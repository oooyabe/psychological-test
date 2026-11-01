'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function DisplayResultPage({ nextStep }) {
  return (
    <>
      <MobileFrame>
        <main className="relative flex h-full w-full flex-col justify-between overflow-hidden text-[#513D2B] bg-white">

          {/* 背景圖片層：滿版對齊 */}
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Image 
              src="/3/result-bg.png" 
              alt="Display Result Background"
              fill
              sizes="(max-width: 640px) 100vw, 390px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* 🌟 輕柔的魔法星光粒子層 */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            <span className="absolute left-[18%] top-[24%] animate-ping text-xs text-[#E4C590] opacity-80 duration-1000">✦</span>
            <span className="absolute right-[20%] top-[22%] animate-ping text-xs text-[#E4C590] opacity-80 duration-1000" style={{ animationDelay: '400ms' }}>✦</span>
            <span className="absolute left-[25%] top-[68%] animate-ping text-[10px] text-[#F3E5CE] opacity-90 duration-1000" style={{ animationDelay: '300ms' }}>✦</span>
            <span className="absolute right-[25%] top-[66%] animate-ping text-[10px] text-[#F3E5CE] opacity-90 duration-1000" style={{ animationDelay: '700ms' }}>✦</span>
          </div>

          {/* 內容區塊：絕對定位 */}
          <div className="absolute inset-x-0 inset-y-0 z-20 flex flex-col justify-between px-6 py-8">
            
            {/* 上方標題與按鈕區塊：將 pt-12 調大（例如 pt-20），讓文字與按鈕整體往下移 */}
            <div className="relative flex items-center justify-center pt-20 px-6">
              <h2 className="font-serif text-[21px] font-bold tracking-[0.15em] text-[#593E2B] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] text-center">
                顯示我的靈魂兔子
              </h2>

              {/* 腳印按鈕（定位在標題右側） */}
              <div className="absolute right-6 flex items-center justify-center">
                <button
                  type="button"
                  onClick={nextStep}
                  aria-label="查看結果"
                  className="
                    group relative flex items-center justify-center
                    p-2 cursor-pointer
                    transition-all duration-300
                    hover:scale-125
                    active:scale-95
                    animate-bounce
                    focus-visible:outline-none
                  "
                >
                  {/* 🐰 純 CSS 繪製的兔子腳印 */}
                  <div className="relative h-7 w-6 drop-shadow-[0_3px_6px_rgba(120,95,60,0.35)] transition-all duration-300 group-hover:brightness-110">
                    
                    {/* 大主掌印 */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-5 rounded-[50%] bg-[#7D5A3F]" />

                    {/* 上方三個小趾印 */}
                    <div className="absolute top-0.5 left-0.5 h-3 w-1.5 rounded-[50%] bg-[#7D5A3F] -rotate-12" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-1.5 rounded-[50%] bg-[#7D5A3F]" />
                    <div className="absolute top-0.5 right-0.5 h-3 w-1.5 rounded-[50%] bg-[#7D5A3F] rotate-12" />
                  </div>

                  {/* 點擊引導的微光呼吸環特效 */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#C8A86D] animate-ping opacity-40 pointer-events-none" />
                </button>
              </div>
            </div>

            {/* 下方保留空間 */}
            <div className="h-10"></div>

          </div>

        </main>
      </MobileFrame>
    </>
  );
}