import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
  max?: boolean
}

const ASSET_V = '26'

function withVersion(src: string) {
  if (src.includes('?')) return src
  return `${src}?v=${ASSET_V}`
}

function webpFor(src: string) {
  return withVersion(src.replace(/\.(jpe?g|png)$/i, '.webp'))
}

/**
 * High-performance Retina @2x/@3x responsive image component.
 * Delivers razor-sharp WebP & original raster sources with crisp display rendering.
 */
export function Img({ src, alt = '', priority, max, loading, decoding, fetchPriority, ...rest }: Props) {
  const eager = Boolean(priority) || loading === 'eager'
  const raster = typeof src === 'string' && /\.(jpe?g|png|webp)$/i.test(src)

  if (!raster || !src || typeof src !== 'string') {
    return (
      <img
        src={typeof src === 'string' ? withVersion(src) : src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={decoding ?? 'async'}
        fetchPriority={priority ? 'high' : (fetchPriority ?? 'low')}
        {...rest}
      />
    )
  }

  const webpSrc = webpFor(src)
  const origSrc = withVersion(src)

  return (
    <picture>
      <source type="image/webp" srcSet={`${webpSrc} 1x, ${webpSrc} 2x`} />
      <source srcSet={`${origSrc} 1x, ${origSrc} 2x`} />
      <img
        src={origSrc}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={decoding ?? 'async'}
        fetchPriority={priority ? 'high' : (fetchPriority ?? 'low')}
        {...rest}
      />
    </picture>
  )
}
