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
              src="/3/result-bg.jpg" 
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
            
            {/* 上方標題區塊：獨立置中 */}
            <div className="flex flex-col items-center pt-14 px-6">
              <h2 className="font-serif text-[22px] font-bold tracking-[0.15em] text-[#593E2B] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] text-center">
                顯示我的靈魂兔子
              </h2>
            </div>

            {/* 下方置中：乾淨俐落的「查看結果」按鈕 */}
            <div className="flex flex-col items-center pb-10 z-30">
              <button
                type="button"
                onClick={nextStep}
                aria-label="查看結果"
                className="
                  relative px-12 py-3.5 rounded-full cursor-pointer
                  bg-gradient-to-r from-[#593E2B] via-[#6B4C35] to-[#7D5A3F]
                  text-[#FFFBF5] font-serif text-[16px] font-bold tracking-[0.2em]
                  shadow-[0_6px_20px_rgba(89,62,43,0.35)]
                  border border-[#E4C590]/50
                  transition-all duration-300
                  hover:scale-105 hover:shadow-[0_8px_25px_rgba(89,62,43,0.5)] hover:border-[#E4C590]
                  active:scale-95
                  focus-visible:outline-none
                  overflow-hidden group
                "
              >
                {/* 按鈕內的高光掃過特效 */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                查看結果
              </button>
            </div>

          </div>

        </main>
      </MobileFrame>
    </>
  );
}