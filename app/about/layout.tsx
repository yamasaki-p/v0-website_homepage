import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "会社概要 - GrowthCommit",
  description:
    "株式会社グロースコミットの会社概要。新規事業・DXの戦略策定から実行支援まで一貫したサービスを提供する専門企業です。",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
