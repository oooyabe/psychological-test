'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';

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
    background: 'rgba(224, 235, 211, 0.45)',
    border: '#C4D0AD',
    accent: '#73885C',
  },
  pink: {
    background: 'rgba(246, 222, 220, 0.45)',
    border: '#E4C0BA',
    accent: '#B77C79',
  },
  blue: {
    background: 'rgba(220, 233, 241, 0.48)',
    border: '#B8CDDA',
    accent: '#718FA7',
  },
  purple: {
    background: 'rgba(231, 220, 241, 0.48)',
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

        {/* 背景圖片 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-white"
          style={{
            backgroundImage: "url('/1.question/bg.jpg')",
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        />

        {/* 內容區塊：將整體位置往上一點（pt-20） */}
        <section className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-6 pt-20 sm:px-7">

          {/* 具設計感的題數顯示：兩側加上金色線條與星星裝飾 */}
          <div className="mb-3 flex items-center justify-center gap-3 text-center">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C8A86D]" />
            <span className="font-serif text-[13px] font-bold tracking-[0.25em] text-[#a6816b]">
              ✦ {formattedIndex} ✦
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C8A86D]" />
          </div>

          {/* 題目文字（套用自訂斷行） */}
          <div className="relative mx-auto w-full max-w-[310px] px-2 py-2 text-center">
            <h1 className="relative font-serif text-[20px] font-medium leading-[1.7] tracking-[0.035em] text-[#513D2B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              {currentQuestion.title}
            </h1>
          </div>

          {/* 四個粉彩選項 */}
          <div className="mt-2 flex w-full flex-col gap-3">
            {currentQuestion.options.map((option, index) => {
              const style = colorStyles[option.color];

              return (
                <button
                  key={`${questionIndex}-${option.title}`}
                  type="button"
                  onClick={() => clickAnswer(option)}
                  className="
                    group relative flex min-h-[58px] w-full items-center gap-3
                    overflow-hidden rounded-[20px] border px-3 py-3 text-left
                    shadow-[0_2px_8px_rgba(115,83,44,0.05)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-white/70
                    hover:shadow-[0_4px_12px_rgba(115,83,44,0.1)]
                    active:translate-y-0
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#B58A43]
                    focus-visible:ring-offset-2
                  "
                  style={{
                    backgroundColor: style.background,
                    borderColor: style.border,
                  }}
                >
                  <span
                    className="
                      relative flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full border bg-white/60 font-serif text-sm italic
                      transition-transform duration-300 group-hover:scale-105
                    "
                    style={{
                      borderColor: style.border,
                      color: style.accent,
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="relative min-w-0 flex-1 text-[13px] font-medium leading-[1.8] tracking-[0.01em] text-[#594633]">
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>
          
        </section>
      </main>
    </MobileFrame>
  );
}