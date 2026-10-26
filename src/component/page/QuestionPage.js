
'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';

const questions = [
  {
    title: '十字路口的奇異景象，什麼最吸引你的目光？',
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
    title: '瘋狂下午茶，你會選擇坐在哪裡？',
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
    title: '紅心女王要你交出寶物，你會選什麼？',
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
    background: 'rgba(224, 235, 211, 0.90)',
    border: '#C4D0AD',
    accent: '#73885C',
  },
  pink: {
    background: 'rgba(246, 222, 220, 0.90)',
    border: '#E4C0BA',
    accent: '#B77C79',
  },
  blue: {
    background: 'rgba(220, 233, 241, 0.92)',
    border: '#B8CDDA',
    accent: '#718FA7',
  },
  purple: {
    background: 'rgba(231, 220, 241, 0.92)',
    border: '#CDBBDF',
    accent: '#8E78A8',
  },
};

function SceneDecoration({ scene }) {
  if (scene === 'forest') {
    return (
      <svg viewBox="0 0 280 100" className="h-[78px] w-full max-w-[260px]" fill="none" aria-hidden="true">
        <g stroke="#B69A6B" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 82 Q40 63 32 45 Q47 51 50 68 Q54 48 69 44 Q67 64 53 82" />
          <path d="M211 82 Q224 62 217 48 Q234 53 238 68 Q245 49 258 46 Q257 66 242 82" />
          <path d="M40 82 Q140 91 240 82" />
          <path d="M96 80 Q92 62 100 52 Q107 46 113 54 Q119 65 116 80" />
          <path d="M84 56 Q105 29 127 56 Q106 65 84 56Z" fill="#E8D9B9" />
          <path d="M139 81 Q135 68 141 60 Q147 55 152 62 Q156 71 154 81" />
          <path d="M129 63 Q145 42 162 63 Q145 70 129 63Z" fill="#D7E0C5" />
          <path d="M73 32 Q79 23 85 32 Q79 40 73 32Z" />
          <path d="M194 40 Q201 29 208 40 Q201 48 194 40Z" />
        </g>
        <g fill="#C2A56F">
          <circle cx="70" cy="21" r="2" />
          <circle cx="180" cy="29" r="1.7" />
          <circle cx="203" cy="15" r="1.5" />
          <path d="M166 19 L168 24 L173 26 L168 28 L166 33 L164 28 L159 26 L164 24Z" />
        </g>
      </svg>
    );
  }

  if (scene === 'tea') {
    return (
      <svg viewBox="0 0 280 100" className="h-[78px] w-full max-w-[260px]" fill="none" aria-hidden="true">
        <g stroke="#B69A6B" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
          <path d="M94 51 H164 L158 71 Q155 78 145 78 H113 Q103 77 100 70Z" fill="#F1E3CA" />
          <path d="M164 55 H175 Q188 55 182 66 Q178 72 161 69" />
          <path d="M88 82 Q129 87 171 82" />
          <path d="M109 46 Q100 37 108 28 Q115 20 109 14" />
          <path d="M129 44 Q121 36 128 28 Q136 20 130 13" />
          <path d="M148 46 Q141 39 147 32 Q153 26 149 21" />
          <path d="M49 76 Q38 63 29 72 Q35 85 49 76Z" />
          <path d="M228 76 Q241 61 251 72 Q243 85 228 76Z" />
          <path d="M39 84 Q51 77 63 83 M219 84 Q237 77 255 83" />
          <path d="M71 39 Q79 30 87 39 Q79 48 71 39Z" />
          <path d="M197 41 Q205 32 213 41 Q205 50 197 41Z" />
        </g>
        <g fill="#C2A56F">
          <circle cx="67" cy="20" r="2" />
          <circle cx="204" cy="19" r="1.7" />
          <path d="M185 20 L188 25 L193 27 L188 29 L185 34 L183 29 L178 27 L183 25Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 100" className="h-[78px] w-full max-w-[260px]" fill="none" aria-hidden="true">
      <g stroke="#B69A6B" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="140" cy="48" r="31" />
        <circle cx="140" cy="48" r="25" />
        <path d="M140 29 V48 L153 55" />
        <path d="M132 15 L140 10 L148 15" />
        <path d="M132 81 L140 86 L148 81" />
        <path d="M109 48 H104 M176 48 H171 M140 17 V22 M140 74 V79" />
        <path d="M60 38 C50 26 37 39 47 49 L60 61 L73 49 C83 38 70 26 60 38Z" fill="#F0D9D4" />
        <path d="M206 68 Q218 49 231 62 Q224 78 206 68Z" />
        <path d="M221 61 Q221 73 210 81" />
      </g>
      <g fill="#C2A56F">
        <circle cx="84" cy="22" r="2" />
        <circle cx="192" cy="25" r="1.5" />
        <path d="M88 59 L91 64 L96 66 L91 68 L88 73 L86 68 L81 66 L86 64Z" />
        <path d="M191 45 L194 50 L199 52 L194 54 L191 59 L189 54 L184 52 L189 50Z" />
      </g>
    </svg>
  );
}

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

  return (
    <MobileFrame>
      <main className="relative flex h-full w-full flex-col overflow-hidden bg-[#FBF5E9] text-[#513D2B]">

        {/* 你的照片作為固定背景，三道題目共用 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('1.question/bg.jpg')",
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />

        {/* 淡奶油色透明遮罩：保留照片，同時維持原本童話配色 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#FBF5E9]/35"
        />

        {/* 四角金色裝飾 */}
        <div aria-hidden="true" className="pointer-events-none absolute left-3 top-3 z-10 h-12 w-12 rounded-tl-2xl border-l border-t border-[#C5A56F]/80" />
        <div aria-hidden="true" className="pointer-events-none absolute right-3 top-3 z-10 h-12 w-12 rounded-tr-2xl border-r border-t border-[#C5A56F]/80" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 z-10 h-12 w-12 rounded-bl-2xl border-b border-l border-[#C5A56F]/80" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 z-10 h-12 w-12 rounded-br-2xl border-b border-r border-[#C5A56F]/80" />

        <section className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-5 pt-5 sm:px-7">

        

          {/* 題目文字 */}
          <div className="relative mx-auto w-full max-w-[310px] px-3 pb-1 pt-1">
            <span aria-hidden="true" className="pointer-events-none absolute -left-1 -top-2 font-serif text-4xl text-[#A9854D]/80">
              ❝
            </span>

            <h1 className="relative text-center font-serif text-[23px] font-medium leading-[1.7] tracking-[0.035em] text-[#513D2B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              {currentQuestion.title}
            </h1>

            <span aria-hidden="true" className="pointer-events-none absolute -bottom-4 right-0 font-serif text-4xl text-[#A9854D]/80">
              ❞
            </span>
          </div>

          {/* 金色分隔花飾 */}
          <div className="mb-3 mt-5 flex shrink-0 items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A86D]" />
            <span className="text-base text-[#A9854D]">{currentQuestion.ornament}</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A86D]" />
          </div>

          {/* 四個粉彩選項：保留左側 A/B/C/D，不顯示右側符號 */}
          <div className="flex w-full flex-col gap-3">
            {currentQuestion.options.map((option, index) => {
              const style = colorStyles[option.color];

              return (
                <button
                  key={`${questionIndex}-${option.title}`}
                  type="button"
                  onClick={() => clickAnswer(option)}
                  className="
                    group relative flex min-h-[62px] w-full items-center gap-3
                    overflow-hidden rounded-[20px] border px-3 py-3 text-left
                    shadow-[0_3px_10px_rgba(115,83,44,0.08)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_6px_16px_rgba(115,83,44,0.14)]
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
                      relative flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full border bg-white/45 font-serif text-base italic
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

          {/* 底部金色裝飾 */}
          <footer className="mt-auto shrink-0 pb-1 pt-5 text-center">
            <div className="flex items-center justify-center gap-2 text-[#A9854D]">
              <span className="text-xs">✧</span>
              <span className="text-lg">❦</span>
              <span className="text-xs">✧</span>
            </div>
          </footer>
        </section>
      </main>
    </MobileFrame>
  );
}
