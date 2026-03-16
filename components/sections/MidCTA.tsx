"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function MidCTA() {
  return (
    <section className="bg-brand-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-gray-900 mb-4">
            サービスについて詳しく聞きたい方へ
          </h2>
          <p className="text-brand-gray-600 mb-8">
            課題やご状況に応じて、具体的な支援内容をご説明します。
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-6 text-base font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              相談する
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
