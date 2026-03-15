"use client"

import { motion } from "framer-motion"

const cases = [
  {
    industry: "教育",
    theme: "AIエージェント開発PMO",
    description:
      "AIエージェント開発プロジェクトのPMOとして、開発体制整理とプロジェクト推進を支援",
  },
  {
    industry: "SIer",
    theme: "新規事業検討高速化の為のAIツール群開発",
    description:
      "事業検討を加速させるAIツール群を、AI駆動開発で高速開発",
  },
  {
    industry: "IT",
    theme: "プロダクト開発人材育成",
    description:
      "プロダクト開発組織のスキル向上のための育成制度設計と研修提供",
  },
]

export default function Cases() {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-gray-400 text-xs tracking-widest uppercase mb-4">
            Cases
          </p>
          <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight mb-6">
            支援実績
          </h2>
          <p className="text-brand-gray-500">
            支援業界: 教育、IT、エンタメ、通信、保険、小売、商社 など
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {cases.slice(0, 2).map((caseItem, index) => (
            <motion.div
              key={index}
              className="bg-brand-gray-50 p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <span className="text-sm text-brand-gray-400 font-medium">
                {caseItem.industry}
              </span>
              <h3 className="text-xl font-bold text-brand-gray-900 mt-2 mb-4">
                {caseItem.theme}
              </h3>
              <p className="text-brand-gray-600">
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="bg-brand-gray-50 p-8">
            <span className="text-sm text-brand-gray-400 font-medium">
              {cases[2].industry}
            </span>
            <h3 className="text-xl font-bold text-brand-gray-900 mt-2 mb-4">
              {cases[2].theme}
            </h3>
            <p className="text-brand-gray-600">
              {cases[2].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
