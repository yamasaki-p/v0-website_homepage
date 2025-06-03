import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GrowthCommit - 新規事業・DXの戦略策定から実行支援まで",
  description: "GrowthCommitは、新規事業・DXの戦略策定から実行支援、人材育成までワンストップで提供する企業です。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gradient-to-br from-gray-50 to-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
