"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Users, AlertCircle, ArrowRight, Award } from "lucide-react"

export default function ServiceAdvisory() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto space-y-12 py-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">戦略策定アドバイザリー</h1>
        <p className="text-xl text-muted-foreground">
          新規事業・DXの戦略策定から実行支援まで、経験豊富なコンサルタントがサポートします。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス概要</h2>
        <p className="text-lg">
          GrowthCommitの戦略策定アドバイザリーは、新規事業・DXの戦略策定から実行支援まで、
          経験豊富なコンサルタントがワンストップでサポートするサービスです。
          クライアント企業の課題や目標に合わせて、最適な戦略を策定し、実行までサポートします。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter flex items-center">
          <Users className="mr-3 h-7 w-7 text-primary" />
          サービス対象者
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z"></path>
                  <path d="M9 22V2"></path>
                  <path d="M14 22V2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">経営企画／新規事業開発部門／DX推進室</h3>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">「若手〜中堅に任せられる人材を育てたい」企業</h3>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">「これまでの育成では足りない」と感じている事業リーダー</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter flex items-center">
          <AlertCircle className="mr-3 h-7 w-7 text-primary" />
          よくある課題
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ユーザー理解が浅い</h3>
              <p className="text-muted-foreground">企画の精度が上がらず、本当のニーズを捉えられていない</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">優先順位付けができない</h3>
              <p className="text-muted-foreground">アイデアはあるが、実行計画に落とし込めていない</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ビジョンが曖昧</h3>
              <p className="text-muted-foreground">メンバーと方向性を共有できず、足並みが揃わない</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス内容</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">新規事業戦略策定</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>市場調査・分析</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>ビジネスモデル設計</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>収益モデル策定</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>実行計画策定</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">DX戦略策定</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>現状分析・課題抽出</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>デジタル化戦略策定</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>テクノロジー選定</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>ロードマップ策定</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter flex items-center">
          <ArrowRight className="mr-3 h-7 w-7 text-primary" />
          進め方（例：3か月プラン）
        </h2>
        <p className="text-lg">
          クライアントの課題に合わせて、支援内容を柔軟に設計可能です。期間や予算に応じて、最適な提案を行います。
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">初期ヒアリング</h3>
              <p className="text-muted-foreground">現状の課題整理と目標設定を行います</p>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">ワークショップ</h3>
              <p className="text-muted-foreground">ユーザー理解・企画ブラッシュアップを実施</p>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">伴走支援</h3>
              <p className="text-muted-foreground">MVP／戦略ロードマップの策定と実行支援</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <p className="text-center text-blue-700">チーム単位での壁打ちセッションや週次レビューにも対応可能です</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter flex items-center">
          <Award className="mr-3 h-7 w-7 text-primary" />
          得られる成果
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-gradient-to-br from-white to-green-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">実現可能な計画</h3>
              <p className="text-muted-foreground">「思いつき」から「実現可能な計画」に変わります</p>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-green-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">チームの一体感</h3>
              <p className="text-muted-foreground">ビジョンや優先順位が共有され、動ける状態になります</p>
            </div>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-white to-green-50 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">提案力の向上</h3>
              <p className="text-muted-foreground">経営層や他部門への説明・提案の精度も向上します</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">特徴・強み</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">実践的なアプローチ</h3>
            <p className="text-muted-foreground">
              机上の空論ではなく、実際に実行可能な戦略を策定します。
              経験豊富なコンサルタントが、実践的なアドバイスを提供します。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">ワンストップサポート</h3>
            <p className="text-muted-foreground">
              戦略策定から実行支援まで、一貫してサポートします。 必要に応じて、PMO代行や人材育成も提供します。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">豊富な実績</h3>
            <p className="text-muted-foreground">
              多様な業界での新規事業・DX推進の実績があります。
              成功事例・失敗事例の知見を活かし、最適な戦略を提案します。
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-muted p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">お問い合わせ</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
          戦略策定アドバイザリーに関するご相談は、お気軽にお問い合わせください。
          貴社の課題や目標に合わせた、最適なソリューションをご提案します。
        </p>
        <Button asChild size="lg">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせする
          </a>
        </Button>
      </section>
    </div>
  )
}
