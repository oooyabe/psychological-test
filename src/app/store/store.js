
import { create } from 'zustand';

// 建立測驗狀態
const usePsyStore = create((set) => ({
  state: 0, // 0: 開始頁、1: 答題頁、2: 結果預覽、3: 最終結果
  questionState: 0,
  totalQuestions: 3,
  score: 0,

  updateState: (newState) =>
    set(() => ({ state: newState })),

  updateQuestionState: (newState) =>
    set(() => ({ questionState: newState })),

  updateTotalQuestions: (newState) =>
    set(() => ({ totalQuestions: newState })),

  updateScore: (newScore) =>
    set(() => ({ score: newScore })),

  // 重設測驗，方便重新作答
  resetQuiz: () =>
    set(() => ({
      state: 0,
      questionState: 0,
      score: 0,
    })),
}));

// 三種人格結果
const personalities = {
  whiteRabbit: {
    name: '懷錶白兔',
    englishName: 'The White Rabbit',
    emoji: '⏱️',
    description:
      '「噢，天哪！我要遲到了！」你是一個非常有責任感且注重細節的人。你的生活井然有序，常常是團隊中最可靠的存在。但仙境提醒你：偶爾也要學會放慢腳步，享受當下。',
  },

  marchHare: {
    name: '三月兔',
    englishName: 'The March Hare',
    emoji: '☕',
    description:
      '「我們來喝茶吧！」你的腦袋裡永遠裝著天馬行空的點子。你精力充沛、充滿創意，不按牌理出牌的你，總能為身邊的人帶來驚喜與打破僵局的歡樂。',
  },

  cheshireRabbit: {
    name: '幻影柴郡兔',
    englishName: 'The Cheshire Rabbit',
    emoji: '🌙',
    description:
      '「我們這裡全都是瘋子。」你就像柴郡貓與兔子的結合體，總是帶著一抹神秘的微笑。你看透事物本質，擁有超齡的冷靜與智慧，喜歡保持一點距離觀察這個世界。',
  },
};

// 題目資料
// option.value 保留原本的數字計分方式
const useQuestionStore = create(() => ({
  questions: {
    '1': {
      title:
        '你站在一個分岔路口，四周長滿了奇異的植物。哪一種景象最吸引你的目光？',
      options: [
        {
          title: '會自己哼唱著輕柔搖籃曲的藍色發光蘑菇',
          value: 2,
        },
        {
          title: '樹枝上掛滿了指針正在倒轉走動的懷錶',
          value: 1,
        },
        {
          title: '半空中會變成各種動物形狀並與你對話的雲朵',
          value: 3,
        },
        {
          title: '鋪滿紅色撲克牌、一路通往遠方城堡的大道',
          value: 2,
        },
      ],
    },

    '2': {
      title:
        '你走到了一場混亂的森林下午茶派對。瘋帽客熱情地邀請你入座，你會選擇坐在哪裡？',
      options: [
        {
          title: '坐在正在茶壺裡呼呼大睡的睡鼠旁邊，安靜不被打擾',
          value: 3,
        },
        {
          title: '坐在瘋帽客對面，準備迎接他古怪又跳脫邏輯的問題',
          value: 2,
        },
        {
          title: '坐在邊緣的空位，先觀察茶壺會不會突然爆炸',
          value: 3,
        },
        {
          title: '直接走到主位，掌控這場混亂派對的節奏',
          value: 1,
        },
      ],
    },

    '3': {
      title:
        '紅心女王的撲克牌士兵包圍了你。女王要求你交出「仙境中最珍貴的寶物」才能離開，你會交出什麼？',
      options: [
        {
          title: '那個最初引導你來到仙境的滴答懷錶',
          value: 1,
        },
        {
          title: '在下午茶偷偷藏起來的魔法蛋糕',
          value: 2,
        },
        {
          title: '能映照出別人真實內心的神秘古銅鏡',
          value: 3,
        },
        {
          title: '什麼都不交，直接轉身尋找逃跑的出口',
          value: 2,
        },
      ],
    },
  },
}));

export { usePsyStore, useQuestionStore, personalities };
