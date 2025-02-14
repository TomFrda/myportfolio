'use client'
import { useEffect, useRef } from 'react'

const Stars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const stars: { x: number; y: number; size: number; speed: number }[] = []
    const numberOfStars = 200

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Déterminer si le thème est sombre
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      stars.forEach((star) => {
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        // Utiliser une couleur différente selon le thème
        ctx.fillStyle = isDarkMode 
          ? 'rgba(255, 255, 255, 0.5)' 
          : 'rgba(0, 0, 0, 0.2)'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Observer les changements de thème
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addListener(() => {
      requestAnimationFrame(animate)
    })

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      mediaQuery.removeListener(() => {
        requestAnimationFrame(animate)
      })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-100 transition-opacity duration-300"
    />
  )
}

export default Stars