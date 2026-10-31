'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';

const questions = [
  {
    title: (
      <>
        十字路口的奇異景象<br />什麼最吸引你的目光
      </>
    ),
    scene: 'forest',
    ornament: '✧',
    options: [
      { title: '會唱搖籃曲的藍色發光蘑菇', value: 2, color: 'green' },
      { title: '指針倒轉的古老懷錶', value: 1, color: 'pink' },
      { title: '會變成動物並與我說話的雲朵', value: 3, color: 'blue' },
      { title: '通往遠方城堡的紅色卡牌大道', value: 2, color: 'purple' },
    ],
  },
  {
    title: (
      <>
        瘋狂下午茶<br />你會選擇坐在哪裡
      </>
    ),
    scene: 'tea',
    ornament: '❦',
    options: [
      { title: '睡鼠旁邊，安靜地享受茶會', value: 3, color: 'green' },
      { title: '瘋帽客對面，挑戰古怪謎題', value: 2, color: 'pink' },
      { title: '角落觀察茶壺會不會爆炸', value: 3, color: 'blue' },
      { title: '主位，掌控整場派對', value: 1, color: 'purple' },
    ],
  },
  {
    title: (
      <>
        紅心女王要你交出寶物<br />你會選什麼
      </>
    ),
    scene: 'queen',
    ornament: '♡',
    options: [
      { title: '帶我來到仙境的懷錶', value: 1, color: 'green' },
      { title: '偷偷藏起來的魔法蛋糕', value: 2, color: 'pink' },
      { title: '能看透人心的神秘古銅鏡', value: 3, color: 'blue' },
      { title: '什麼都不交，直接尋找出口', value: 2, color: 'purple' },
    ],
  },
];

const colorStyles = {
  green: {
    background: 'rgba(224, 235, 211, 0.85)',
    border: '#C4D0AD',
    accent: '#73885C',
  },
  pink: {
    background: 'rgba(246, 222, 220, 0.85)',
    border: '#E4C0BA',
    accent: '#B77C79',
  },
  blue: {
    background: 'rgba(220, 233, 241, 0.88)',
    border: '#B8CDDA',
    accent: '#718FA7',
  },
  purple: {
    background: 'rgba(231, 220, 241, 0.88)',
    border: '#CDBBDF',
    accent: '#8E78A8',
  },
};

export default function QuestionPage({ questionIndex, nextStep }) {
  const score = usePsyStore((state) => state.score);
  const updateScore = usePsyStore((state) => state.updateScore);

  const currentQuestion = questions[questionIndex];

  const clickAnswer = (option) => {
    updateScore(score + option.value);
    nextStep();
  };

  if (!currentQuestion) {
    return (
      <MobileFrame>
        <div className="flex h-full items-center justify-center bg-[#FBF5E9] px-6 text-center text-[#513D2B]">
          找不到題目，請確認題目設定。
        </div>
      </MobileFrame>
    );
  }

  // 將當前題號轉為兩位數格式（例如 01, 02, 03）
  const formattedIndex = String(questionIndex + 1).padStart(2, '0');

  return (
    <MobileFrame>
      <main className="relative flex h-full w-full flex-col overflow-hidden text-[#513D2B]">

        {/* 背景圖片：完美對齊滿版 */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/1.question/bg.jpg"
            alt="題目背景"
            fill
            sizes="(max-width: 640px) 100vw, 390px"
            className="object-cover object-center"
          />
        </div>

        {/* 內容區塊：微調定位區間 */}
        <div className="absolute inset-x-4 top-[17%] bottom-[10%] z-10 flex flex-col justify-between items-center">

          {/* 上方：題數與題目（透過 pt-2 讓題目整體往下推，更靠近下方的選項） */}
          <div className="flex w-full flex-col items-center pt-2">
            <div className="mb-2 flex items-center justify-center gap-3 text-center">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#C8A86D]" />
              <span className="font-serif text-[12px] font-bold tracking-[0.25em] text-[#a6816b]">
                ✦ {formattedIndex} ✦
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#C8A86D]" />
            </div>

            <div className="text-center px-2">
              <h1 className="font-serif text-[19px] font-medium leading-[1.5] tracking-[0.035em] text-[#513D2B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                {currentQuestion.title}
              </h1>
            </div>
          </div>

          {/* 中間：2x2 網格選項（維持大器飽滿的尺寸） */}
          <div className="grid w-full grid-cols-2 gap-3.5 my-auto px-1">
            {currentQuestion.options.map((option, index) => {
              const style = colorStyles[option.color];

              return (
                <button
                  key={`${questionIndex}-${option.title}`}
                  type="button"
                  onClick={() => clickAnswer(option)}
                  className="
                    group relative flex flex-col justify-between min-h-[145px] w-full p-4 text-left
                    overflow-hidden rounded-[22px] border
                    shadow-[0_4px_14px_rgba(115,83,44,0.1)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/95
                    hover:shadow-[0_6px_20px_rgba(115,83,44,0.2)]
                    active:translate-y-0
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#B58A43]
                  "
                  style={{
                    backgroundColor: style.background,
                    borderColor: style.border,
                  }}
                >
                  {/* A, B, C, D 代號徽章 */}
                  <span
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full border bg-white/90 font-serif text-[12px] italic
                      shadow-sm transition-transform duration-300 group-hover:scale-110
                    "
                    style={{
                      borderColor: style.border,
                      color: style.accent,
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>

                  {/* 選項文字 */}
                  <span className="mt-2 text-[12.5px] font-medium leading-[1.5] tracking-[0.01em] text-[#594633]">
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 底部預留空間剛好貼齊兔子 */}
          <div className="h-2" />

        </div>
      </main>
    </MobileFrame>
  );
}