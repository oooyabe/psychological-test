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
              className="object-cover object-center animate-fade duration-1000"
              priority
            />
          </div>

          {/* 🌟 豐富的魔法星光與微粒層（增加呼吸與閃爍動畫） */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            <span className="absolute left-[15%] top-[22%] animate-pulse text-sm text-[#E4C590] opacity-80 duration-1000">✨</span>
            <span className="absolute right-[18%] top-[20%] animate-ping text-xs text-[#E4C590] opacity-70 duration-1000" style={{ animationDelay: '400ms' }}>✦</span>
            <span className="absolute left-[12%] top-[52%] animate-ping text-[10px] text-[#F3E5CE] opacity-90 duration-1000" style={{ animationDelay: '300ms' }}>✦</span>
            <span className="absolute right-[14%] top-[55%] animate-pulse text-xs text-[#E4C590] opacity-90 duration-1500" style={{ animationDelay: '600ms' }}>⋆</span>
            <span className="absolute left-[25%] top-[78%] animate-pulse text-xs text-[#E4C590] opacity-60">✨</span>
            <span className="absolute right-[25%] top-[80%] animate-ping text-[10px] text-[#F3E5CE] opacity-80 duration-1000" style={{ animationDelay: '800ms' }}>✦</span>
          </div>

          {/* 內容區塊：絕對定位 */}
          <div className="absolute inset-x-0 inset-y-0 z-20 flex flex-col justify-between px-6 py-8">
            
            {/* 上方標題與神祕風文案區塊（加入由上而下的淡入滑入動畫） */}
            <div className="flex flex-col items-center pt-10 px-6 text-center animate-in fade-in slide-in-from-top-4 duration-700">
              <p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-[#a6816b] opacity-90">
                ✦ TICK TOCK, THE DOOR IS OPEN ✦
              </p>
              <h2 className="font-serif text-[24px] font-bold tracking-[0.15em] text-[#593E2B] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]">
                靈魂兔子現身
              </h2>
            </div>

            {/* 下方置中：質感咖啡色按鈕（加入由下而上的淡入動畫與呼吸浮動感） */}
            <div className="flex flex-col items-center pb-10 z-30 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <button
                type="button"
                onClick={nextStep}
                aria-label="揭曉我的靈魂兔子"
                className="
                  relative px-10 py-3.5 rounded-full cursor-pointer
                  bg-gradient-to-r from-[#593E2B] via-[#6B4C35] to-[#7D5A3F]
                  text-[#FFFBF5] font-serif text-[15px] font-bold tracking-[0.2em]
                  shadow-[0_6px_20px_rgba(89,62,43,0.35)]
                  border border-[#E4C590]/50
                  transition-all duration-300
                  hover:scale-105 hover:shadow-[0_8px_25px_rgba(89,62,43,0.5)] hover:border-[#E4C590]
                  active:scale-95
                  focus-visible:outline-none
                  overflow-hidden group
                  animate-pulse
                "
              >
                {/* 按鈕內的高光掃過特效 */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                揭曉我的靈魂兔子 ✨
              </button>
            </div>

          </div>

        </main>
      </MobileFrame>
    </>
  );
}