import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "非エンジニアが行く！生成AI最前線！ - GrowthCommit",
  description: "ビジネス職向けに、生成AIの活用方法や最新情報をお伝えします。",
}

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
