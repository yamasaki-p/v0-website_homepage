"use client"

import { motion } from "framer-motion"

const members = [
  {
    name: "山崎 亮",
    role: "代表取締役",
    photo: "/images/ceo-photo-new.jpg",
    career:
      "DeNAにて新規事業・プロダクト開発に従事。その後、外資系コンサルティングファーム戦略部門にて、大手企業のDX・新規事業戦略を多数支援。現在は独立し、企業の変革推進・AI活用を支援。",
    expertise: "新規事業開発 / DX・AX戦略 / プロジェクト推進 / 組織・人材育成",
  },
  {
    name: "小川 芳充",
    role: "Tech Lead",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E5%B7%9D%E3%81%95%E3%82%93%E5%86%99%E7%9C%9F.jpg-AE0o2ebPaS9hUN8MvTCIXPo0VvdeD8.jpeg",
    career:
      "サイバーエージェントにてゲーム・広告システム・ECシステムの開発に従事。大手メディア企業との協業を経て、toC / toB 向けの複数サービスの設計・開発を担当。現在はAIを活用した開発と業務効率化の支援を実践。",
    expertise: "Webアプリ開発 / システム設計 / AI駆動開発 / 業務効率化",
  },
]

const companyInfo = {
  name: "株式会社グロースコミット",
  representative: "山崎 亮",
  address: "東京都渋谷区神宮前六丁目２３番４号 ２Ｆ",
  business: "戦略PMO支援 / AI活用支援",
}

export default function About() {
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
            About
          </p>
          <h2 className="text-display-sm font-bold text-brand-gray-900 tracking-tight">
            私たちについて
          </h2>
        </motion.div>

        {/* Members */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 object-cover object-top grayscale"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-brand-gray-400 font-medium mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold text-brand-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-brand-gray-600 text-sm leading-relaxed mb-4">
                    {member.career}
                  </p>
                  <p className="text-brand-gray-500 text-sm">
                    <span className="font-medium">専門領域:</span> {member.expertise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          className="border-t border-brand-gray-200 pt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-brand-gray-900">会社情報</h3>
              <dl className="space-y-4">
                <div className="flex gap-4">
                  <dt className="text-brand-gray-400 w-24 flex-shrink-0">会社名</dt>
                  <dd className="text-brand-gray-700">{companyInfo.name}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-brand-gray-400 w-24 flex-shrink-0">代表者</dt>
                  <dd className="text-brand-gray-700">{companyInfo.representative}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-brand-gray-400 w-24 flex-shrink-0">所在地</dt>
                  <dd className="text-brand-gray-700">{companyInfo.address}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-brand-gray-400 w-24 flex-shrink-0">事業内容</dt>
                  <dd className="text-brand-gray-700">{companyInfo.business}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-4">Mission</h3>
              <p className="text-xl text-brand-gray-700 leading-relaxed">
                限られた人材が、本来向き合うべき
                <br />
                高付加価値業務に集中できる状態をつくる
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
