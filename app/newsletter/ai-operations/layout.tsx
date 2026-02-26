import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI活用を現場で動かす実務責任者のためのニュースレター - GrowthCommit",
  description: "AIツールの話だけでなく、プロジェクト推進・人材育成まで。上流の戦略と現場への埋め込みをつなぐ実践知を月1回お届けします。",
}

// LP専用のシンプルなヘッダー（ロゴのみ）
function LPHeader() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
        <Link href="/" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate_logo-LzqMeIIJHV2UT2bHdO8lOShFXffsNR.png"
            alt="GrowthCommit"
            className="h-10"
          />
        </Link>
      </div>
    </header>
  )
}

export default function AIOperationsNewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* 親レイアウトのヘッダーを非表示にするスタイル */}
      <style dangerouslySetInnerHTML={{
        __html: `
          body > div > header:first-child {
            display: none !important;
          }
        `
      }} />
      <LPHeader />
      {children}
    </>
  )
}
