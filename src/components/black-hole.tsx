import { useEffect, useRef } from 'react'
import '../assets/style/black_hole.css'

export default function StaticBlackHole() {
  const holeRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const hole = holeRef.current
    if (!hole) return

    const animateGlow = (time: number) => {
      const t = Math.sin(time * 0.005) * 0.5 + 0.5 
      hole.style.boxShadow = `
        0 0 ${20 + t * 40}px rgba(255,255,255,0.8),
        0 0 ${40 + t * 60}px rgba(255,255,255,0.6),
        0 0 ${60 + t * 80}px rgba(255,255,255,0.4)
      `
      rafRef.current = requestAnimationFrame(animateGlow)
    }

    rafRef.current = requestAnimationFrame(animateGlow)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="blackhole-container">
      <div ref={holeRef} className="blackhole" />
    </div>
  )
}
