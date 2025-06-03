import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicePMO() {
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

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">導入事例</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">C社：金融機関のDXプロジェクト</h3>
            <p className="text-muted-foreground mb-4">
              基幹システムのクラウド移行プロジェクトのPMO支援。 複数ベンダーの調整、リスク管理、進捗管理を担当。
            </p>
            <p className="font-medium">成果：予定通りのスケジュールでの移行完了、運用コスト30%削減</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">D社：EC事業立ち上げ</h3>
            <p className="text-muted-foreground mb-4">
              新規EC事業立ち上げのPMO支援。 システム構築、物流体制構築、マーケティング戦略実行の統合管理を担当。
            </p>
            <p className="font-medium">成果：計画より1ヶ月早い立ち上げ、初年度売上目標120%達成</p>
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
