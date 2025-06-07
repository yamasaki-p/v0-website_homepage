"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Users, AlertCircle, Award } from "lucide-react"

export default function ServiceTraining() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto space-y-12 py-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">新規事業・DXに関する人材育成</h1>
        <p className="text-xl text-muted-foreground">新規事業・DXを推進する人材の育成をサポートします。</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス概要</h2>
        <p className="text-lg">
          GrowthCommitの人材育成サービスは、新規事業・DXを推進する人材の育成をサポートするサービスです。
          座学だけでなく、実践的なワークショップやOJTを通じて、実際に新規事業・DXを推進できる人材を育成します。
          クライアント企業の状況に合わせて、最適な育成プログラムを設計・提供します。
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
              <h3 className="text-xl font-bold">「若手〜中堅に任せられる人材を育てたい」企業様</h3>
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
              <h3 className="text-xl font-bold">「これまでの育成では足りない」と感じている事業リーダーの方々</h3>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">適した人材がいない</h3>
              <p className="text-muted-foreground">
                新規事業やDXのプロジェクトに<strong>適した人材が社内にいない</strong>
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
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15 9 3-3-3-3"></path>
                  <path d="m9 15-3 3 3 3"></path>
                  <path d="m15 15 3 3-3-3"></path>
                  <path d="m9 9-3-3 3-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">必要スキルが不明確</h3>
              <p className="text-muted-foreground">
                育成したいが、<strong>何を教えればよいか（必要なスキル）が明確でない</strong>
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">行動変容が起きない</h3>
              <p className="text-muted-foreground">
                研修はやっているが、<strong>実務につながる行動変容が起きていない</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">サービス内容</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">研修プログラム</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>新規事業開発研修</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>DX推進研修</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>プロジェクトマネジメント研修</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>デザイン思考研修</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">実践的支援</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>ワークショップ運営</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>OJT支援</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>メンタリング</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>育成計画策定</span>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">社内人材の育成</h3>
              <p className="text-muted-foreground">
                新規事業やDX推進を<strong>任せられる人材を社内から育てられる</strong>
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
              <h3 className="text-xl font-bold mb-2">実行力の向上</h3>
              <p className="text-muted-foreground">
                スキルが"自分ごと"になり、<strong>現場での実行力が高まる</strong>
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
              <h3 className="text-xl font-bold mb-2">育成の仕組み化</h3>
              <p className="text-muted-foreground">
                上司のOJT負担が軽減され、<strong>育成が仕組みとして回るようになる</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">特徴・強み</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">実践的なプログラム</h3>
            <p className="text-muted-foreground">
              座学だけでなく、実際のプロジェクトを題材にした実践的なプログラムを提供します。
              実際に使える知識・スキルを身につけることができます。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">カスタマイズ対応</h3>
            <p className="text-muted-foreground">
              クライアント企業の状況や課題に合わせて、最適な育成プログラムを設計・提供します。
              オーダーメイドのプログラムで、効果的な人材育成を実現します。
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">経験豊富な講師陣</h3>
            <p className="text-muted-foreground">
              実際に新規事業・DXプロジェクトを成功させた経験を持つ講師陣が、リアルな知見を提供します。
              成功事例・失敗事例の両方から学ぶことができます。
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-muted p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">お問い合わせ</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
          人材育成サービスに関するご相談は、お気軽にお問い合わせください。
          貴社の状況や課題に合わせた、最適な育成プログラムをご提案します。
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
