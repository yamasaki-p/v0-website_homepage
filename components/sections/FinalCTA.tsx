"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="bg-brand-black text-white py-20 lg:py-28">
      <div className="container mx-auto px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            組織の複雑性を、
            <br />
            一緒に圧縮しませんか。
          </h2>
          <p className="text-brand-gray-400 text-lg mb-10">
            課題の整理からお手伝いします。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-black hover:bg-brand-gray-100 px-10 py-6 text-base font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
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
          <p className="text-brand-gray-500 text-sm mt-6">
            相談は無料です / 1営業日以内にご返信します
          </p>
        </motion.div>
      </div>
    </section>
  )
}
