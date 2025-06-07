"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          新規事業・DXで、
          <br />
          社会のクリエイティビティを最大化する
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
          私たちは事業リーダーの挑戦を支援し、革新的な組織とプロジェクトをつくります。
          <br />
          人とチームの力を引き出すことで、社会のクリエイティビティを最大化します。
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Button
          variant="default"
          size="lg"
          asChild
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせ
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
