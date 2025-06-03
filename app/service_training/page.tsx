import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServiceTraining() {
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

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">導入事例</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">E社：製造業のDX人材育成</h3>
            <p className="text-muted-foreground mb-4">
              製造現場のDX推進リーダー育成プログラムを提供。
              データ分析、IoT活用、プロジェクト管理のスキルを習得するプログラムを設計・実施。
            </p>
            <p className="font-medium">成果：6ヶ月で10名のDX推進リーダーを育成、3つの改善プロジェクトを立ち上げ</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-2">F社：新規事業開発人材の育成</h3>
            <p className="text-muted-foreground mb-4">
              新規事業開発チームのスキル向上プログラムを提供。
              市場調査、ビジネスモデル設計、プロトタイピングのスキルを習得するプログラムを設計・実施。
            </p>
            <p className="font-medium">成果：3ヶ月で2つの新規事業アイデアを具体化、1つが事業化決定</p>
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
