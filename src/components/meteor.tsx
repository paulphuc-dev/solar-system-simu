import { useEffect, useRef } from 'react'
import '../assets/style/meteor.css'

export default function TracerMeteor() {
  const headRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const head = headRef.current
    const trail = trailRef.current
    if (!head || !trail) return

    const start = { x: -150, y: 80 }
    const end = {
      x: window.innerWidth + 150,
      y: window.innerHeight * 0.6,
    }

    const dx = end.x - start.x
    const dy = end.y - start.y
    const angle = Math.atan2(dy, dx)
    const duration = 6000

    let startTime = 0
    let fading = false

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const t = Math.min((time - startTime) / duration, 1)

      const ease = t * t * (3 - 2 * t)
      const x = start.x + dx * ease
      const y = start.y + dy * ease

      head.style.transform = `translate(${x}px, ${y}px)`

      if (!fading) {
        const dist = Math.hypot(x - start.x, y - start.y)
        trail.style.width = `${dist}px`
        trail.style.transform = `
          translate(${start.x}px, ${start.y}px)
          rotate(${angle}rad)
        `
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        fadeOut()
      }
    }

    const fadeOut = () => {
      fading = true
      trail.style.transition = 'opacity 1.2s ease-out'
      trail.style.opacity = '0'

      setTimeout(reset, 1200)
    }

    const reset = () => {
      startTime = 0
      fading = false
      trail.style.transition = 'none'
      trail.style.opacity = '1'
      trail.style.width = '0px'
      head.style.transform = 'translate(-9999px, -9999px)'

      setTimeout(() => {
        rafRef.current = requestAnimationFrame(animate)
      }, 2000)
    }

    const initialDelay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate)
    }, 3000)

    return () => {
      clearTimeout(initialDelay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="tracer-container">
      <div ref={trailRef} className="meteor-trail" />
      <div ref={headRef} className="meteor-head" />
    </div>
  )
}
