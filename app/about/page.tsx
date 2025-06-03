import { Button } from "@/components/ui/button"
import { Building2, MapPin, Calendar, Target } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto space-y-16 py-12">
      {/* ヒーローセクション */}
      <section className="space-y-8 text-center py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <div className="flex justify-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate_logo-LzqMeIIJHV2UT2bHdO8lOShFXffsNR.png"
            alt="GrowthCommit"
            className="h-16"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          会社概要
        </h1>
        <p className="mx-auto max-w-[800px] text-xl text-gray-600 leading-relaxed">
          新規事業・DXの成功を支援する専門企業として、戦略策定から実行支援まで一貫したサービスを提供しています。
        </p>
      </section>

      {/* 会社情報 */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            会社情報
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">会社名</h3>
              </div>
              <p className="text-lg text-gray-700">株式会社グロースコミット</p>
            </div>

            <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">所在地</h3>
              </div>
              <p className="text-lg text-gray-700">東京都港区南青山3丁目1番36号</p>
            </div>

            <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">設立</h3>
              </div>
              <p className="text-lg text-gray-700">2025年6月</p>
            </div>
          </div>

          <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">事業目的</h3>
            </div>
            <div className="space-y-4 text-gray-700">
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
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  5
                </span>
                <p className="text-sm leading-relaxed">前各号に附帯又は関連する一切の事業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表者情報 */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            代表者紹介
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/ceo-photo-new.jpg"
                  alt="山崎 亮 代表取締役"
                  className="w-32 md:w-48 object-cover border-2 border-white shadow-lg rounded-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800">山崎 亮</h3>
                <p className="text-lg text-blue-600 font-semibold">代表取締役</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-800">経歴・専門分野</h4>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  DeNAにて新規事業・事業開発に従事。外資系コンサルティングファーム（戦略部門）にて、大手企業のDX・新規事業戦略を多数支援。
                </p>
                <p>
                  数十社の事業開発・組織設計・人材育成に関与し、
                  <strong className="text-blue-600">"動く現場"をつくること</strong>に強みを持つ。
                </p>
                <p>ビジネスと組織、個人の成長の交差点に立ち続けながら、創造的な組織づくりを支援中。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョン */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            私たちの想い
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">ミッション</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              新規事業・DXの成功を通じて、企業の持続的な成長と社会の発展に貢献する。
              "動く現場"をつくり、創造的な組織づくりを支援します。
            </p>
          </div>

          <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">ビジョン</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              ビジネスと組織、個人の成長が交差する場所で、 企業の変革を支援し続ける、信頼されるパートナーとなる。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter">お問い合わせ</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            弊社のサービスや取り組みについて、ご質問やご相談がございましたら、
            <br />
            お気軽にお問い合わせください。
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせする
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
