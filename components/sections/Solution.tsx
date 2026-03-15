"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const solutions = [
  "重要テーマへの集中投下ができている",
  "会議が意思決定の場として機能している",
  "変革テーマがPoCで止まらず、実装まで進んでいる",
  "現場社員がAIを使う具体イメージを持てている",
  "人が調整や停滞ではなく、本質的な仕事に集中できている",
]

export default function Solution() {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-gray-400 text-xs tracking-widest uppercase mb-4">
              Solution
            </p>
            <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight mb-12">
              複雑性が圧縮された状態
            </h2>
          </motion.div>

          <ul className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <span className="flex-shrink-0 w-6 h-6 mt-0.5 bg-brand-accent/10 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-brand-accent" />
                </span>
                <span className="text-lg text-brand-gray-700 leading-relaxed">
                  {solution}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
