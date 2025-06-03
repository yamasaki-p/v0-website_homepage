import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServiceAdvisory() {
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

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">導入事例</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">A社：製造業のDX推進</h3>
            <p className="text-muted-foreground mb-4">
              製造プロセスのデジタル化による生産性向上を実現。
              IoTセンサーの導入からデータ分析基盤の構築まで、包括的なDX戦略を策定・実行支援。
            </p>
            <p className="font-medium">成果：生産効率20%向上、不良品率15%減少</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">B社：小売業の新規事業立ち上げ</h3>
            <p className="text-muted-foreground mb-4">
              実店舗とECの融合による新たな顧客体験の創出。
              オムニチャネル戦略の策定から、システム選定、組織体制の構築まで支援。
            </p>
            <p className="font-medium">成果：新規顧客30%増加、客単価15%向上</p>
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
