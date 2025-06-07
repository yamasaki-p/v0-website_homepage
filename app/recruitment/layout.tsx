import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "採用募集 - GrowthCommit",
  description: "GrowthCommitの採用情報。プロジェクトマネージャー・アシスタント、BizDevなどの職種を募集しています。",
}

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
