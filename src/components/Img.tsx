import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
  max?: boolean
}

const ASSET_V = '2'

function withVersion(src: string) {
  if (src.includes('?')) return src
  return `${src}?v=${ASSET_V}`
}

function webpFor(src: string) {
  return withVersion(src.replace(/\.(jpe?g|png)$/i, '.webp'))
}

export function Img({ src, alt = '', priority, max, loading, decoding, fetchPriority, ...rest }: Props) {
  const eager = Boolean(priority) || loading === 'eager'
  const raster = typeof src === 'string' && /\.(jpe?g|png)$/i.test(src)

  const image = (
    <img
      src={typeof src === 'string' ? withVersion(src) : src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={decoding ?? 'async'}
      fetchPriority={priority ? 'high' : (fetchPriority ?? 'low')}
      {...rest}
    />
  )

  if (!raster || !src) return image

  if (max) {
    return (
      <picture>
        <source media="(max-width: 860px)" type="image/webp" srcSet={webpFor(src)} />
        {image}
      </picture>
    )
  }

  return (
    <picture>
      <source type="image/webp" srcSet={webpFor(src)} />
      {image}
    </picture>
  )
}
