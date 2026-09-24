import { useEffect, useState } from 'react'
import { Img } from './Img'

type Props = {
  images: readonly string[]
  alt?: string
  interval?: number
}

export function BoardFade({ images, alt = '', interval = 3800 }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [images, interval])

  return (
    <div className="board-fade" aria-hidden={alt ? undefined : true}>
      {images.map((src, i) => (
        <Img
          key={src}
          src={src}
          alt={i === index ? alt : ''}
          className={i === index ? 'on' : undefined}
          priority={i === 0}
          max
        />
      ))}
    </div>
  )
}
