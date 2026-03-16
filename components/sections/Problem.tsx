"use client"

import { motion } from "framer-motion"

const problems = [
  "構想はあるのに、現場が動き出さない",
  "変革テーマが乱立し、どこから手をつけるか決まらない",
  "会議は増えるが、意思決定が進まない",
  "AI活用を始めたが、一部の人の取り組みで終わっている",
  "AIテーマが乱立するが、成果につながるものに絞れない",
]

export default function Problem() {
  return (
    <section className="bg-brand-gray-50 section-padding">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-gray-400 text-xs tracking-widest uppercase mb-4">
              Problem
            </p>
            <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight mb-12">
              こんな課題はありませんか？
            </h2>
          </motion.div>

          <ul className="space-y-6">
            {problems.map((problem, index) => (
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
                <span className="flex-shrink-0 w-2 h-2 mt-3 bg-brand-gray-400 rounded-full" />
                <span className="text-lg text-brand-gray-700 leading-relaxed">
                  {problem}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
