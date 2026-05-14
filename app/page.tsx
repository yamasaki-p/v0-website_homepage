import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Sparkles, Users, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto space-y-20 py-12">
      {/* ヒーローセクション */}
      <section className="space-y-8 text-center py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <p className="text-sm md:text-base font-semibold tracking-widest text-blue-600 uppercase">
          EFFORTLESS TRANSFORMATION
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          組織の複雑性を、圧縮する
        </h1>
        <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-600 leading-relaxed">
          意思決定と実行の無駄を減らし、変革を前進させます。
        </p>
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
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
            複雑な変革を、前に進める
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              私たちは、<strong className="text-blue-600">戦略PMO支援</strong>と
              <strong className="text-blue-600">AI活用支援</strong>の2つの領域で、
              <br />
              組織の変革推進を支援しています。
            </p>
            <p className="text-lg">
              複数部門・複数ベンダーが絡む複雑な変革テーマや、
              <br />
              現場に定着しにくいAI活用の課題に対して、
              <br />
              <strong className="text-blue-600">意思決定と実行の両面から前進させる</strong>ことを大切にしています。
            </p>
            <p className="text-lg">
              構想で止まらず、実行まで動かす。
              <br />
              <strong className="text-blue-600">組織の複雑性を圧縮し、重要なテーマに集中できる状態をつくる</strong>支援を行っています。
            </p>
          </div>
        </div>

        {/* サービス詳細 */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
          {/* サービス1: 戦略PMO支援 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-blue-500 tracking-widest mb-3">SERVICE 01</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">戦略PMO支援</h3>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                複雑な変革テーマを、意思決定と実行の両面から前進させます。
                <br />
                構想を整理し、複雑な実行体制を動かします。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">こんな課題に対応</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      構想はあるが、現場が動ける単位に落ちていない
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      施策が乱立し、優先順位が曖昧
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      複数部門・複数ベンダーの体制で、実行が複雑化している
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">提供価値</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      構想を意思決定可能な形に整理する
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      施策群を実行可能な形に再設計する
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      複雑な実行体制を動かし、前に進める
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">導入事例</h4>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">大手教育事業者｜生成AIプロジェクトPMO</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    複数ベンダー体制のDXプロジェクトで、ロードマップ策定から進捗管理までを支援。期限通りのリリースを実現。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* サービス2: AI活用支援 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-blue-500 tracking-widest mb-3">SERVICE 02</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">AI活用支援</h3>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                AI活用を現場業務に接続し、組織能力として定着させます。
                <br />
                導入で終わらせず、実務で使われる状態まで支援します。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">こんな課題に対応</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      AI活用が現場に定着せず、一過性で終わる
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      活用が一部の先進人材や特定部署に閉じている
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      現場業務に即したユースケース設計が難しい
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">提供価値</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      AI活用を現場業務に接続する
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      個人技ではなく組織能力として定着させる
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      有効なユースケースを整理し、横展開可能にする
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">導入事例</h4>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">大手メーカー｜AI活用の組織展開</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    部門別ユースケース設計から研修・定着支援を実施。特定人材に閉じていた活用を組織全体に展開。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 月額プロマネLPへのリンク */}
        <div>
          <a
            href="https://lp.growthcommit.com/aipm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            月額プロマネ — サービス詳細を見る
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* 私たちの強み */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            私たちの強み
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 space-y-4 shadow-sm">
            <p className="text-xs font-semibold text-blue-400 tracking-widest">01</p>
            <h3 className="text-lg font-bold text-gray-800">戦略と現場、両方を理解</h3>
            <div className="space-y-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                構想から実行まで一貫して支援します。
              </p>
              <p className="text-gray-500 text-sm">
                戦略コンサル × 事業会社出身のチーム。
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 space-y-4 shadow-sm">
            <p className="text-xs font-semibold text-blue-400 tracking-widest">02</p>
            <h3 className="text-lg font-bold text-gray-800">業務に接続した設計</h3>
            <div className="space-y-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                ツール導入ではなく、現場で使われる形に。
              </p>
              <p className="text-gray-500 text-sm">
                定着までを見据えた設計を行います。
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 space-y-4 shadow-sm">
            <p className="text-xs font-semibold text-blue-400 tracking-widest">03</p>
            <h3 className="text-lg font-bold text-gray-800">組織を動かす推進力</h3>
            <div className="space-y-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                複数部門・ベンダーを含む体制を前進。
              </p>
              <p className="text-gray-500 text-sm">
                個人技ではなく組織能力として蓄積。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 支援実績 */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            支援実績
          </h2>
        </div>
        <div className="space-y-6">
          {/* 事例1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-md">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800">AI駆動開発</h3>
                <p className="text-sm text-gray-500">大手製造業</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">支援内容</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    曖昧な要望から要件を整理し、LLM活用アプリの仕様化・開発推進を担当。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">成果</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-800">2か月で4プロダクト</strong>をデリバリー。手戻りなく、<strong className="text-gray-800">予定より前倒しで完了</strong>。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 事例2 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-md">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800">人材育成PMO</h3>
                <p className="text-sm text-gray-500">大手人材サービス</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">支援内容</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ジュニアPdM約50名向けの育成スキームを設計し、週次で運用・改善を伴走。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">成果</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-800">上司の育成負荷が軽減</strong>。受講者の思考・業務の型化が進み、成長実感を獲得。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 事例3 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-md">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800">実装推進PMO</h3>
                <p className="text-sm text-gray-500">教育サービス</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">支援内容</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    複数ベンダー体制の推進を立て直し、未決定事項の可視化・解消を主導。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">成果</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    停滞していたプロジェクトを<strong className="text-gray-800">期限内にデリバリー完了</strong>。
                  </p>
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

        <div className="max-w-6xl mx-auto space-y-12">
          {/* 代表 */}
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/images/ceo-photo-new.jpg"
                  alt="山崎 亮 代表取締役"
                  className="w-48 lg:w-56 h-48 lg:h-56 object-cover object-top border-2 border-white shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <p className="text-blue-600 font-semibold">代表取締役</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">山崎 亮</h3>
                  <p className="text-gray-600 mt-1">戦略と実行をつなぎ、変革を前に進める</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  DeNA、外資系コンサル（戦略部門）を経て独立。大手企業のDX・新規事業を多数支援。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">新規事業</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">DX戦略</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">PMO</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">組織育成</span>
                </div>
              </div>
            </div>
          </div>

          {/* リードエンジニア */}
          <div className="rounded-3xl border-2 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E5%B7%9D%E3%81%95%E3%82%93%E5%86%99%E7%9C%9F.jpg-AE0o2ebPaS9hUN8MvTCIXPo0VvdeD8.jpeg"
                  alt="小川 芳充 リードエンジニア"
                  className="w-48 lg:w-56 h-48 lg:h-56 object-cover object-top border-2 border-white shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <p className="text-blue-600 font-semibold">リードエンジニア</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">小川 芳充</h3>
                  <p className="text-gray-600 mt-1">技術と業務をつなぎ、実装まで落とし込む</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  サイバーエージェントにてゲーム・広告・ECシステム開発に従事。AI活用と業務効率化を実践。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Web開発</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">システム設計</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">AI駆動開発</span>
                </div>
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
            <div className="grid gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">会社名</h4>
                  <p className="text-gray-700">株式会社グロースコミット</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">所在地</h4>
                  <p className="text-gray-700">東京都渋谷区神宮前六丁目２３番４号 ２Ｆ</p>
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
              <Link href="/recruitment" scroll={true}>
                採用募集
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
