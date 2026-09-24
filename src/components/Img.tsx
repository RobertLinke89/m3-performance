import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
}

function webpFor(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export function Img({ src, alt = '', priority, loading, decoding, fetchPriority, ...rest }: Props) {
  const eager = Boolean(priority) || loading === 'eager'
  const raster = typeof src === 'string' && /\.(jpe?g|png)$/i.test(src)

  return (
    <picture>
      {raster && src && <source type="image/webp" srcSet={webpFor(src)} />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={decoding ?? 'async'}
        fetchPriority={priority ? 'high' : fetchPriority}
        {...rest}
      />
    </picture>
  )
}
