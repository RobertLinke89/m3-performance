import { useEffect, useRef, useState } from 'react'
import { Img } from './Img'

type Props = {
  images: readonly string[]
  alt?: string
  interval?: number
}

export function BoardFade({ images, alt = '', interval = 3800 }: Props) {
  const [index, setIndex] = useState(0)
  const [armed, setArmed] = useState(false)
  const visible = useRef(true)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const idle = window.setTimeout(() => setArmed(true), 900)
    return () => window.clearTimeout(idle)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting
      },
      { threshold: 0.2 },
    )
    io.observe(root)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (!visible.current) return
      setIndex((n) => (n + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [images, interval])

  return (
    <div className="board-fade" ref={rootRef} aria-hidden={alt ? undefined : true}>
      {images.map((src, i) => {
        if (!armed && i > 0) return null
        return (
          <Img
            key={src}
            src={src}
            alt={i === index ? alt : ''}
            className={i === index ? 'on' : undefined}
            priority={i === 0}
            max
          />
        )
      })}
    </div>
  )
}
