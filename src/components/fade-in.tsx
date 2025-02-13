'use client'

import { useEffect, useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function FadeIn({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current // Copie de la référence
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-10'
      case 'down': return '-translate-y-10'
      case 'left': return 'translate-x-10'
      case 'right': return '-translate-x-10'
      default: return 'translate-y-10'
    }
  }

  return (
    <div 
      ref={ref} 
      className={`opacity-0 ${getDirectionClass()} transition-all duration-1000 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
} 
