import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI活用・新規事業を前に進める実務責任者向けメルマガ | GrowthCommit",
  description: "AI活用・新規事業プロジェクトを前に進める実務責任者向けに、AI活用 / PM / 人材育成の実践知を配信するニュースレターです。無料・月1回前後・いつでも解除可能。",
  openGraph: {
    title: "AI活用・新規事業を前に進める実務責任者向けメルマガ",
    description: "AI活用 / PM / 人材育成の実践知を配信。実務で使えるテーマを厳選してお届けします。",
    url: "/newsletter/ai-operations",
    type: "website",
    images: [
      {
        url: "/og/newsletter-ai-operations.png",
        width: 1200,
        height: 630,
        alt: "AI活用・新規事業を前に進める実務責任者向けメルマガ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI活用・新規事業を前に進める実務責任者向けメルマガ",
    description: "AI活用 / PM / 人材育成の実践知を配信。実務で使えるテーマを厳選してお届けします。",
    images: ["/og/newsletter-ai-operations.png"],
  },
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
