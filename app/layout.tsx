import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ModeProvider } from "@/contexts/mode-context"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JH Sen 拍卖行 | 高端艺术品拍卖",
  description: "专业的艺术品拍卖平台，提供高品质的艺术收藏品、古董和珍品拍卖服务",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={dmSans.variable}>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  )
}
