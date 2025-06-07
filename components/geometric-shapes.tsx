"use client"

import { motion } from "framer-motion"

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 大きな幾何学図形 - 右側 */}
      <motion.div
        className="absolute -right-32 top-0 w-[600px] h-[600px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.15">
            <path d="M300 0L600 300L300 600L0 300L300 0Z" fill="url(#gradient1)" />
            <path d="M150 150L450 150L450 450L150 450L150 150Z" fill="url(#gradient2)" opacity="0.7" />
            <circle cx="300" cy="300" r="150" fill="url(#gradient3)" opacity="0.5" />
          </g>
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="150" y1="150" x2="450" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="gradient3" x1="150" y1="150" x2="450" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0891B2" />
              <stop offset="1" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 左側の装飾要素 */}
      <motion.div
        className="absolute -left-16 top-1/4 w-[300px] h-[300px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="url(#gradient4)" />
          <defs>
            <linearGradient id="gradient4" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 装飾的なライン - 右上 */}
      <motion.div
        className="absolute top-20 right-20 w-[200px] h-[2px] bg-gradient-to-r from-blue-500 to-transparent"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.5, width: 200 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />

      {/* 装飾的なライン - 右中央 */}
      <motion.div
        className="absolute top-1/3 right-40 w-[150px] h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.5, width: 150 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      />

      {/* 装飾的なライン - 左下 */}
      <motion.div
        className="absolute bottom-32 left-20 w-[120px] h-[2px] bg-gradient-to-l from-blue-500 to-transparent"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.5, width: 120 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      />

      {/* 浮遊するアイコン要素 */}
      <div className="absolute inset-0">
        {/* 技術アイコン - 右上 */}
        <motion.div
          className="absolute top-24 right-32 w-16 h-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
            y: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* 技術アイコン - 右中央 */}
        <motion.div
          className="absolute top-1/2 right-16 w-14 h-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.8,
            y: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.27002 6.96002L12 12L20.73 6.96002"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 22.08V12" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* 技術アイコン - 左下 */}
        <motion.div
          className="absolute bottom-32 left-40 w-12 h-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1,
            y: {
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#0891B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 2V4" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 20V22" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4.93 4.93L6.34 6.34"
                stroke="#0891B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.66 17.66L19.07 19.07"
                stroke="#0891B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M2 12H4" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 12H22" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M6.34 17.66L4.93 19.07"
                stroke="#0891B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.07 4.93L17.66 6.34"
                stroke="#0891B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
