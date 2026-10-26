
'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="relative isolate flex h-full w-full flex-col items-center justify-center gap-[38px] overflow-hidden px-5 py-8">

        {/* 背景圖片：固定在最底層，避免被其他元素遮住 */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/0.start/start-bg-2.png"
            alt="夢幻童話森林與白兔"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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
        <div className="relative z-10 flex w-full flex-col items-center gap-[38px]">

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
              ✦ YOUR STORY BEGINS HERE ✦
            </p>

            <div
              className="text-[13px] font-medium leading-[2.2] tracking-[0.06em] text-[#704e43]"
              style={{
                textShadow: '0 1px 5px rgba(255, 249, 237, 0.95)',
              }}
            >
              追隨白兔，走向森林深處
              <br />
              跌入通往夢境的神祕樹洞
              <br />
              在光影交錯的奇幻仙境
              <br />
              循著心底微光探索未知的自己
              <br />
              尋找那隻專屬於你的靈魂兔子
            </div>

            <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-[#987467]">
              準備好探索魔幻仙境了嗎？
            </p>
          </section>

{/* 開始入口：跟隨白兔腳印 */}
<button
  type="button"
  onClick={nextStep}
  aria-label="開始心理測驗，跳入樹洞"
  className="
    group relative translate-x-20
    flex min-h-[76px] min-w-[220px]
    cursor-pointer items-center justify-center gap-3
    border-0 bg-transparent
    px-5 py-3
    text-[#805247]
    transition-all duration-300
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#B99B62]
    focus-visible:ring-offset-2
  "
>
  {/* 左側小兔腳印 */}
  <svg
    aria-hidden="true"
    viewBox="0 0 32 36"
    className="
      relative h-8 w-7 shrink-0
      -rotate-[25deg]
      text-[#B99B62]/80
      transition-transform duration-300
      group-hover:-translate-y-1 group-hover:rotate-[-35deg]
    "
    fill="currentColor"
  >
    <ellipse cx="16" cy="23" rx="7" ry="9" />
    <ellipse cx="7" cy="10" rx="3.2" ry="5" transform="rotate(-25 7 10)" />
    <ellipse cx="15" cy="6" rx="3.2" ry="5" />
    <ellipse cx="24" cy="10" rx="3.2" ry="5" transform="rotate(25 24 10)" />
  </svg>

  {/* 文字與引導線 */}
  <span className="relative flex flex-col items-center gap-1.5">
    <span
      className="
        whitespace-nowrap text-[16px] font-semibold
        tracking-[0.24em]
        transition-all duration-300
        group-hover:tracking-[0.3em]
      "
    >
      跳入樹洞
    </span>

    <span
      aria-hidden="true"
      className="
        flex h-px w-full items-center justify-end
        bg-gradient-to-r from-transparent via-[#B99B62]/70 to-[#B99B62]
      "
    >
      <span
        className="
          h-1 w-1 translate-x-0.5 rotate-45
          border-r border-t border-[#B99B62]
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />
    </span>
  </span>

  {/* 右側箭頭 */}
  <span
    aria-hidden="true"
    className="
      text-lg font-light text-[#A6816B]
      transition-transform duration-300
      group-hover:translate-x-1.5
    "
  >
    →
  </span>

  {/* 右上方延伸的腳印 */}
  <svg
    aria-hidden="true"
    viewBox="0 0 48 44"
    className="
      pointer-events-none absolute -right-1 -top-1
      h-9 w-10 rotate-[25deg]
      text-[#B99B62]/65
      transition-all duration-500
      group-hover:-translate-y-1 group-hover:translate-x-1
      group-hover:text-[#A6816B]
    "
    fill="currentColor"
  >
    <g transform="translate(4 7) rotate(-25 10 12)">
      <ellipse cx="10" cy="22" rx="5" ry="6.5" />
      <ellipse cx="3" cy="12" rx="2.2" ry="3.5" />
      <ellipse cx="9" cy="9" rx="2.2" ry="3.5" />
      <ellipse cx="15" cy="12" rx="2.2" ry="3.5" />
    </g>
    <g transform="translate(25 0) rotate(20 10 12)" opacity="0.7">
      <ellipse cx="10" cy="22" rx="4" ry="5.5" />
      <ellipse cx="4" cy="13" rx="2" ry="3" />
      <ellipse cx="10" cy="10" rx="2" ry="3" />
      <ellipse cx="16" cy="13" rx="2" ry="3" />
    </g>
  </svg>
</button>

        </div>
      </div>
    </MobileFrame>
  );
}
