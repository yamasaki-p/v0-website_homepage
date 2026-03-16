"use client"

import { motion } from "framer-motion"

const strengths = [
  {
    title: "戦略提言でも、プロジェクト推進でもない",
    description:
      "構想の具体化から、意思決定の設計、複雑な実行体制の構築まで一貫して伴走",
  },
  {
    title: "あらゆる断絶を埋める",
    description:
      "意思決定層と実行層、部門と部門、社内と社外。複数のステークホルダー間に生じる断絶を解消し、変革を前に進める体制を持つ",
  },
  {
    title: "施策の実行ではなく、成果の創出まで",
    description:
      "導入や実施で終わらせず、現場への定着と組織能力としての蓄積まで責任を持つ",
  },
]

export default function Strengths() {
  return (
    <section className="bg-brand-gray-50 section-padding">
      <div className="container mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-gray-400 text-xs tracking-widest uppercase mb-4">
            Strengths
          </p>
          <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight">
            私たちの強み
          </h2>
        </motion.div>

        <div className="space-y-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-white border border-brand-gray-200 p-8 lg:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-brand-gray-900 mb-4">
                {strength.title}
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
