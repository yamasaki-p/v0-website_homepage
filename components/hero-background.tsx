"use client"

import { useEffect, useRef } from "react"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスのサイズをウィンドウに合わせる
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // パーティクルの設定
    const particles: Particle[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          "rgba(59, 130, 246, 0.5)", // blue-500
          "rgba(6, 182, 212, 0.5)", // cyan-500
          "rgba(14, 165, 233, 0.5)", // sky-500
          "rgba(2, 132, 199, 0.5)", // blue-600
          "rgba(8, 145, 178, 0.5)", // cyan-600
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // パーティクルの初期化
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // 線を描画する関数
    function drawLines() {
      if (!ctx) return

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // アニメーションループ
    function animate() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // パーティクルの更新と描画
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      drawLines()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
