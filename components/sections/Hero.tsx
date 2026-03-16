"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

export default function Hero() {
  return (
    <section className="relative bg-brand-black text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <motion.p
            className="text-brand-gray-400 text-sm tracking-widest uppercase mb-6 font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Effortless Transformation
          </motion.p>

          <motion.h1
            className="text-display font-bold tracking-tight mb-8"
            {...fadeInUp}
          >
            組織の複雑性を、
            <br />
            圧縮する。
          </motion.h1>

          <motion.p
            className="text-xl text-brand-gray-300 leading-relaxed mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            意思決定と実行の無駄を減らし、
            <br />
            変革を前進させます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
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
      </div>
    </section>
  )
}
