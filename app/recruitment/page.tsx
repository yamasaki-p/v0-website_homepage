"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Users, CheckCircle, Clock, MapPin } from "lucide-react"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function Recruitment() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // ページロード時に最上部にスクロール
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto space-y-16 py-12">
      {/* ヒーローセクション */}
      <section className="space-y-8 text-center py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Recruit
        </h1>
        <p className="mx-auto max-w-[800px] text-xl text-gray-600 leading-relaxed">
          私たちと一緒に、企業の成長と変革を支援する仲間を募集しています。
        </p>
      </section>

      {/* 募集職種リンク */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          募集職種
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <a href="#pm" className="block">
            <div className="rounded-xl border-2 p-6 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">プロジェクトマネージャー・アシスタント</h3>
              </div>
              <p className="text-gray-600">
                プロジェクト運営・管理、ドキュメント作成・管理、コミュニケーション・ファシリテーション
              </p>
            </div>
          </a>
          <a href="#bizdev" className="block">
            <div className="rounded-xl border-2 p-6 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">BizDev</h3>
              </div>
              <p className="text-gray-600">潜在顧客の発掘、商談プロセスの管理、コンテンツマーケティング、SNS運用</p>
            </div>
          </a>
        </div>
      </section>

      {/* プロジェクトマネージャー・アシスタント */}
      <section id="pm" className="pt-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">プロジェクトマネージャー・アシスタント</h2>
              </div>

              {/* 業務内容 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  業務内容・例<span className="text-gray-600 text-lg font-normal ml-2">（ご経験に応じて相談）</span>
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">プロジェクト運営・管理</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Webアプリケーション開発プロジェクトの企画から運用まで一気通貫での管理</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>人材育成プロジェクトの設計・実行・効果測定</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>プロジェクトスケジュールの策定と進捗管理</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">ドキュメント作成・管理</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>プロジェクト計画書、進捗報告書の作成</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>要件定義書、仕様書の取りまとめ</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>プロジェクト関連資料の整備・管理</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">コミュニケーション・ファシリテーション</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>ステークホルダーとの調整・交渉</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>会議の企画・運営・ファシリテーション</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 必須要件・歓迎要件 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">必須要件・歓迎要件</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>プロジェクトマネジメント経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Webアプリケーション開発プロジェクトの管理経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>プロダクトマネジメントの経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>人材育成・研修企画の経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Excel/Google スプレッドシート、PowerPoint/Google スライドの業務レベルでの使用経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>リモートワーク環境での業務遂行能力</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>優れたコミュニケーション能力と調整力</span>
                  </li>
                </ul>
              </div>

              {/* 雇用条件 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">雇用条件</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>正社員・業務委託</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>報酬は経験・スキルに応じて、協議のうえ決定</span>
                  </li>
                </ul>
              </div>

              {/* 勤務時間・勤務場所 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">勤務時間・勤務場所</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>フルリモート</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>勤務時間はクライアント都合を考慮した上で、応相談</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BizDev */}
      <section id="bizdev" className="pt-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">BizDev</h2>
              </div>

              {/* 業務内容 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  業務内容<span className="text-gray-600 text-lg font-normal ml-2">（ご経験に応じて相談）</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>潜在顧客の発掘とアプローチ戦略の立案・実行</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>商談プロセスの管理と受注に向けた交渉</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>コンテンツマーケティング（記事作成、ウェビナー企画等）</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>SNS運用とオンラインでのブランディング活動</span>
                  </li>
                </ul>
              </div>

              {/* 必須要件・歓迎要件 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">必須要件・歓迎要件</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>IT・Web業界での営業経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Webマーケティングの経験</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>高いコミュニケーション能力</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>積極的な行動力と実行力</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>柔軟性と変化への適応力</span>
                  </li>
                </ul>
              </div>

              {/* 雇用条件 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">雇用条件</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>正社員・業務委託</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>報酬は経験・スキルに応じて、協議のうえ決定</span>
                  </li>
                </ul>
              </div>

              {/* 勤務時間・勤務場所 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">勤務時間・勤務場所</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>フルリモート</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>勤務時間はクライアント都合を考慮した上で、応相談</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter">応募・お問い合わせ</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            ご興味をお持ちの方は、お気軽にお問い合わせください。
            <br />
            経験・スキルに応じて、柔軟に対応いたします。
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              応募する
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
