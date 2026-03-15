"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    name: "戦略PMO支援",
    description: "複雑な変革テーマを、意思決定と実行の両面から前進させる",
    problems: [
      "構想はあるが、現場が動ける単位に落ちていない",
      "変革テーマが施策群として存在し、優先順位が曖昧",
      "意思決定の論点が整理されないまま会議が増える",
      "実行フェーズで複数部門・複数ベンダーにより複雑化する",
    ],
    values: [
      "構想を意思決定可能な形に具体化する",
      "施策群を実行可能な形に再設計する",
      "複数ステークホルダー間の断絶を解消する",
      "複雑な実行体制を構築し、前に進める",
    ],
  },
  {
    number: "02",
    name: "AI活用支援",
    description: "AI活用を現場業務に定着させ、組織能力として成果につなげる",
    problems: [
      "AI活用が現場業務に定着せず、一過性で終わる",
      "AI活用が一部の先進人材や一部の部署に閉じる",
      "現場業務に即したユースケース設計が難しい",
      "AIエージェントは期待が大きい一方、設計と導入が難しい",
    ],
    values: [
      "AI活用を現場業務に接続する",
      "個人技ではなく組織能力に変える",
      "有効なユースケースを整理し、横展開可能にする",
      "AIエージェントを業務に組み込む",
    ],
  },
]

export default function Services() {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-gray-400 text-xs tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight">
            サービス
          </h2>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="border border-brand-gray-200 p-8 lg:p-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="mb-8">
                <span className="text-brand-gray-400 text-sm font-medium tracking-wider">
                  {service.number}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-gray-900 mt-2 mb-4">
                  {service.name}
                </h3>
                <p className="text-lg text-brand-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-brand-gray-200 pt-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <h4 className="text-sm font-medium text-brand-gray-400 uppercase tracking-wider mb-4">
                      対象となる課題
                    </h4>
                    <ul className="space-y-3">
                      {service.problems.map((problem, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-brand-gray-600"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-brand-gray-300 rounded-full" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-brand-gray-400 uppercase tracking-wider mb-4">
                      提供価値
                    </h4>
                    <ul className="space-y-3">
                      {service.values.map((value, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-brand-gray-700"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-brand-accent rounded-full" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
