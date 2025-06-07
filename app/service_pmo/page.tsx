"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Users, AlertCircle, Award } from "lucide-react"

export default function ServicePMO() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto space-y-12 py-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">新規事業・DXのPMO代行</h1>
        <p className="text-xl text-muted-foreground">
          プロジェクト管理から実行支援まで、経験豊富なPMがサポートします。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス概要</h2>
        <p className="text-lg">
          GrowthCommitのPMO代行サービスは、新規事業・DXプロジェクトの成功をサポートするサービスです。
          プロジェクト管理から実行支援まで、経験豊富なPMが一貫してサポートします。
          クライアント企業の状況に合わせて、最適なプロジェクト管理体制を構築し、プロジェクトの成功を支援します。
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">新規事業やDXプロジェクトをリーダー1人で抱えてしまっている方</h3>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                いろんな部門を巻き込む必要があるが、会議設計や合意形成に困っている方
              </h3>
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
              <h3 className="text-xl font-bold">PMOを内部で立てたいが、一時的に外部からの支援を受けたい方</h3>
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">プロジェクトが進まない</h3>
              <p className="text-muted-foreground">
                プロジェクトが<strong>進まない／滞る</strong>が、原因が分からない
              </p>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">会議が機能しない</h3>
              <p className="text-muted-foreground">
                会議の目的が曖昧で、<strong>意思決定がされないまま時間だけが過ぎていく</strong>
              </p>
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
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">KPIが機能しない</h3>
              <p className="text-muted-foreground">
                KPIはあるが、<strong>進捗管理やチームとの接続が弱く、現場で機能していない</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス内容</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">プロジェクト管理</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>プロジェクト計画策定</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>進捗管理・リスク管理</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>ステークホルダー調整</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>課題管理・解決支援</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">実行支援</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>ベンダー選定・管理</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>品質管理</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>変更管理</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>定例会議運営</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter flex items-center">
          <Award className="mr-3 h-7 w-7 text-primary" />
          得られる成果
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="text-xl font-bold mb-2">プロジェクトが前進</h3>
              <p className="text-muted-foreground">
                <strong>プロジェクトが止まらず、前に進む状態がつくれる</strong>
              </p>
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
              <h3 className="text-xl font-bold mb-2">会議が機能する</h3>
              <p className="text-muted-foreground">
                <strong>会議が"考える場・決める場"として機能する</strong>
              </p>
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
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">データ駆動の判断</h3>
              <p className="text-muted-foreground">
                <strong>KPIに基づく判断ができ、チームが同じ方向を向いて進める</strong>
              </p>
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
              <h3 className="text-xl font-bold mb-2">リーダーの負担軽減</h3>
              <p className="text-muted-foreground">
                リーダーの負担が減り、<strong>本来注力すべき戦略や意思決定に集中できる</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">特徴・強み</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">豊富な経験</h3>
            <p className="text-muted-foreground">
              多様な業界での新規事業・DXプロジェクトの経験があります。
              成功事例・失敗事例の知見を活かし、最適なプロジェクト管理を提供します。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">柔軟な対応</h3>
            <p className="text-muted-foreground">
              クライアント企業の状況に合わせて、最適なプロジェクト管理体制を構築します。
              フルタイム常駐から、リモート支援まで、柔軟に対応します。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">実践的なアプローチ</h3>
            <p className="text-muted-foreground">
              形式的なプロジェクト管理ではなく、実際にプロジェクトを成功に導くための実践的なアプローチを提供します。
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-muted p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">お問い合わせ</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
          PMO代行サービスに関するご相談は、お気軽にお問い合わせください。
          貴社のプロジェクトに合わせた、最適なPMO体制をご提案します。
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
