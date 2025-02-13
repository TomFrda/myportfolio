'use client'

import { useEffect, useState } from 'react'

export default function ShootingStars() {
  const [stars, setStars] = useState<{ id: number; delay: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 10
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  )
} 