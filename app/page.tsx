import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Briefcase, Users, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto space-y-20 py-12">
      {/* ヒーローセクション */}
      <section className="space-y-8 text-center py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          新規事業・DXで、
          <br />
          社会のクリエイティビティを最大化する
        </h1>
        <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-600 leading-relaxed">
          私たちは事業リーダーの挑戦を支援し、革新的な組織とプロジェクトをつくります。
          <br />
          人とチームの力を引き出すことで、社会のクリエイティビティを最大化します。
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl px-8 py-4 text-lg"
          >
            <Link href="/service_advisory">サービスを見る</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせ
            </a>
          </Button>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="space-y-16">
        {/* サービス概要 */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            戦略 × 実行 × チーム育成で、事業を前に進める
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              私たちは、新規事業やデジタル化に取り組む企業に対して、
              <br />
              <strong className="text-blue-600">
                戦略策定・アドバイザリー支援、プロジェクトマネジメント、人材育成を一気通貫で提供
              </strong>
              しています。
            </p>
            <p className="text-lg">
              特に、事業リーダーが"最強のチーム"をつくり、自走型で推進できる状態を目指し、
              <br />
              戦略と実行、そして組織の力がつながるような支援を大切にしています。
            </p>
            <p className="text-lg">
              これまで数多くのデジタル領域の新規事業に関わってきた経験を活かし、
              <br />
              <strong className="text-blue-600">構想で終わらせず、着実に"動く現場"を生み出す支援</strong>
              を行っています。
            </p>
          </div>
        </div>

        {/* サービス詳細 */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
          {/* サービス1 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">新規事業・ＤＸの戦略策定アドバイザリー</h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                ユーザー理解の設計から、事業アイデアの言語化、優先順位付け、ロードマップ策定まで。
                <br />
                新規事業やDX推進を、"構想で止まらず、動かす"戦略に落とし込みます。
              </p>

              <div className="flex justify-end">
                <Link
                  href="/service_advisory"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">導入事例</h4>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">大手ITサービス事業者</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    大手ITサービス事業者の市場調査の実施、次期戦略オプション及び参入戦略及び実現の為のオペレーション方針を策定。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* サービス2 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">新規事業・ＤＸのPMO代行</h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                プロジェクトの進行が止まる、会議が形骸化している、KPIの管理がされていない。
                <br />
                そんな状態に対して、進捗管理・会議体設計・チームの巻き込みまでを支援する、実行型のPMOサービスを提供します。
              </p>

              <div className="flex justify-end">
                <Link
                  href="/service_pmo"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">導入事例</h4>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">大手教育事業者のDXプロジェクトPMO支援</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    DXにおけるロードマップを作成し、社内外ステークホルダ間で、進捗及び課題を管理。大型プロジェクトの期限通りリリースと社内業務のデジタル化×高度化を実現
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* サービス3 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">新規事業・ＤＸに関する人材育成</h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                新規事業やDXを担う人材に必要なスキル・マインドを、実務に即して育成。
                <br />
                人材要件の定義から研修設計、OJTの実施まで一貫して支援します。
              </p>

              <div className="flex justify-end">
                <Link
                  href="/service_training"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">導入事例</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">大手ITサービス企業のPdM育成</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      PdM育成における課題の抽出、育成ロードマップや個別研修の設計・運営・改善を実施。高い育成効果を発揮し、上司の育成負荷軽減を実現
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">大手SIer企業の人材育成リーダー</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      新規事業研修に関する方法論の研修及びメンタリングを実施。実プロジェクト形式で、新規事業を検討し、リリースに向け推進中
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メンバー紹介 */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            メンバー紹介
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/images/ceo-photo-new.jpg"
                  alt="山崎 亮 代表"
                  className="w-48 lg:w-56 object-cover border-2 border-white shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div>
                  <p className="text-blue-600 font-semibold text-lg">代表</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">山崎 亮</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  DeNAにて新規事業・事業開発に従事。外資系コンサルティングファーム（戦略部門）にて、大手企業のDX・新規事業戦略を多数支援。数十社の事業開発・組織設計・人材育成に関与し、"動く現場"をつくることに強みを持つ。ビジネスと組織、個人の成長の交差点に立ち続けながら、創造的な組織づくりを支援中
                </p>
                <Button asChild variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  <a
                    href="https://note.com/growth_commit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    noteを執筆中 <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企業情報 */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            企業情報
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">会社概要</h3>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">会社名</h4>
                  <p className="text-gray-700">株式会社グロースコミット</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">所在地</h4>
                  <p className="text-gray-700">東京都港区南青山3丁目1番36号 丸竹ビル</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">業務内容</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </span>
                      <p className="text-sm leading-relaxed">
                        新規事業開発およびデジタルトランスフォーメーション（DX）に関する戦略立案・経営コンサルティング・アドバイザリー業
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </span>
                      <p className="text-sm leading-relaxed">
                        新規事業およびDXに関するプロジェクトマネジメント、プロジェクト支援、受託業務
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </span>
                      <p className="text-sm leading-relaxed">
                        新規事業およびDXに関する人材育成、教育・研修、セミナー・ワークショップの企画、運営並びに教材の制作・販売
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </span>
                      <p className="text-sm leading-relaxed">
                        コンピュータソフトウェア、モバイルアプリケーション、クラウドサービス等の企画、設計、開発、販売、賃貸、保守、運用および受託開発
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">お問い合わせ</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            「お問い合わせ」のボタンリンクと「採用募集」のボタンリンクをクリックしてください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                お問い合わせ
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 border-white px-8 py-4 text-lg font-semibold"
            >
              <Link href="/recruitment">採用募集</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
