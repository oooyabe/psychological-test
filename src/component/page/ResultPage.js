'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function(){
    window.location.reload();
  }

  // 根據分數對應到正確的結果背景圖片
  const getResultImage = () => {
    if (psyState.score < 6) return '/4.result/result1.jpg';
    if (psyState.score < 8) return '/4.result/result2.jpg';
    return '/4.result/result3.jpg';
  };

  return (
    <>
      <MobileFrame>
        {/* 外層容器 */}
        <div className="relative flex h-full w-full flex-col overflow-hidden text-[#513D2B]">
          
          {/* 滿版背景圖片層 */}
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Image 
              src={getResultImage()} 
              alt="result background" 
              fill 
              sizes="(max-width: 640px) 100vw, 390px"
              className="object-cover object-top" 
              priority 
            />
          </div>

          {/* 內容覆蓋層：將 top 改為 54%，讓整塊文字往下移動一點點 */}
          <div className="absolute inset-x-5 top-[60%] z-10 flex flex-col items-center">
            
            {/* 兔子名稱與屬性標籤 */}
            <div className="mb-2 flex flex-col items-center text-center">
              {psyState.score < 6 && (
                <>
                  <h2 className="font-serif text-[17px] font-bold tracking-[0.05em] text-[#4A3322] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    ⏱️ 懷錶白兔 <span className="text-[11px] font-normal opacity-80">(The White Rabbit)</span>
                  </h2>
                  <p className="mt-0.5 text-[10.5px] tracking-wider text-[#6B4F3A] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    理性 ｜ 嚴謹 ｜ 責任感強
                  </p>
                </>
              )}

              {((psyState.score >= 6 && psyState.score < 8)) && (
                <>
                  <h2 className="font-serif text-[17px] font-bold tracking-[0.05em] text-[#4A3322] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    ☕ 三月兔 <span className="text-[11px] font-normal opacity-80">(The March Hare)</span>
                  </h2>
                  <p className="mt-0.5 text-[10.5px] tracking-wider text-[#6B4F3A] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    熱情 ｜ 古怪 ｜ 創造力爆發
                  </p>
                </>
              )}

              {psyState.score >= 8 && (
                <>
                  <h2 className="font-serif text-[17px] font-bold tracking-[0.05em] text-[#4A3322] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    🌙 幻影柴郡兔 <span className="text-[11px] font-normal opacity-80">(The Cheshire Rabbit)</span>
                  </h2>
                  <p className="mt-0.5 text-[10.5px] tracking-wider text-[#6B4F3A] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    洞察 ｜ 冷靜 ｜ 神秘莫測
                  </p>
                </>
              )}
            </div>

            {/* 核心描述文字區塊 */}
            <div className="w-full rounded-2xl bg-white/90 px-3.5 py-2.5 text-center shadow-sm backdrop-blur-[2px]">
              {psyState.score < 6 && (
                <>
                  <p className="font-serif text-[11.5px] font-bold tracking-wide text-[#513D2B]">
                    「噢，天哪！我要遲到了！」
                  </p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#513D2B]/90">
                    你是一個非常有責任感且注重細節的人。你的生活井然有序，常常是團隊中最可靠的存在。但仙境提醒你：偶爾也要學會放慢腳步，享受當下。
                  </p>
                </>
              )}

              {((psyState.score >= 6 && psyState.score < 8)) && (
                <>
                  <p className="font-serif text-[11.5px] font-bold tracking-wide text-[#513D2B]">
                    「我們來喝茶吧！」
                  </p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#513D2B]/90">
                    你的腦袋裡永遠裝著天馬行空的點子。你精力充沛、充滿創意，不按牌理出牌的你，總能為身邊的人帶來驚喜與打破僵局的歡樂。
                  </p>
                </>
              )}

              {psyState.score >= 8 && (
                <>
                  <p className="font-serif text-[11.5px] font-bold tracking-wide text-[#513D2B]">
                    「表面上隨性瘋狂內心卻清醒得可怕！」
                  </p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#513D2B]/90">
                    你就像柴郡貓與兔子的結合體，總是帶著一抹神秘的微笑。你看透事物本質，擁有超齡的冷靜與智慧，喜歡保持一點距離觀察這個世界。
                  </p>
                </>
              )}
            </div>

            {/* 再玩一次按鈕 */}
            <div className="mt-2.5 w-full">
              <button 
                type="button"
                className="w-full rounded-full bg-[#6B4F3A] py-2.5 text-xs font-medium text-white shadow-[0px_3px_0px_1px_#4A3322] transition hover:translate-y-0.5 active:translate-y-1 focus-visible:outline-none"
                onClick={playAgain}
              > 
                再玩一次 
              </button>
            </div>

          </div>

        </div>
      </MobileFrame>
    </>
  );
}