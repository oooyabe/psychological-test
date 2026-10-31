import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "仙境迷蹤 - 尋找內心的靈魂兔子",
  description: "在光影交錯的奇幻仙境，循著心底微光探索未知的自己",
};

// 關鍵：設定 viewport-fit=cover 讓畫面完全貼齊手機頂部，消除上方灰邊
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        {/* 正確引入 Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Long+Cang&family=Ma+Shan+Zheng&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}