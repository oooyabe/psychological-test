'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden px-6 py-6">

        {/* 背景圖片 */}
        <div className="absolute inset-0 z-0">
  <Image 
    src="/bg-2.jpg" 
    alt="background" 
    fill 
    sizes="390px"
    className="object-cover object-center" 
    priority 
  />
</div>

        {/* 柔和暖色濾鏡 */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundColor: 'rgba(255, 244, 223, 0.1)',
          }}
        />

        {/* 上方：標題與故事文案區 */}
        <div className="relative z-10 flex w-full flex-col items-center text-center pt-40">
          
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

          <div className="mt-5 flex flex-col items-center">
            <p className="mb-2 text-[11px] tracking-[0.25em] text-[#b18b70]">
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
          </div>

        </div>

        {/* 按鈕區：往上提到兔子頭部上方（減少 pb 留白） */}
        <div className="relative z-30 flex w-full justify-center pb-90">
          <button
            type="button"
            onClick={nextStep}
            className="
              flex items-center justify-center 
              bg-gradient-to-r from-[#d4a373] to-[#c89665] 
              px-8 py-3 text-[14px] font-bold tracking-widest text-white 
              shadow-[0_6px_20px_rgba(166,124,101,0.4)] 
              border border-white/50 backdrop-blur-md 
              transition-all duration-300 
              hover:-translate-y-1 hover:brightness-110 
              hover:shadow-[0_8px_25px_rgba(166,124,101,0.6)] 
              active:scale-95 rounded-full
            "
          >
            跳進樹洞 ✨
          </button>
        </div>

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