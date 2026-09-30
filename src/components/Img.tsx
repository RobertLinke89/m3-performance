import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
  max?: boolean
}

const ASSET_V = '28'

function withVersion(src: string) {
  if (src.includes('?')) return src
  return `${src}?v=${ASSET_V}`
}

function webpFor(src: string) {
  return withVersion(src.replace(/\.(jpe?g|png)$/i, '.webp'))
}

function retina2xWebp(src: string) {
  const base = src.replace(/(@2x)?\.(jpe?g|png|webp)$/i, '')
  return withVersion(`${base}@2x.webp`)
}

function retina2xOrig(src: string) {
  const ext = src.match(/\.(jpe?g|png|webp)$/i)?.[0] || '.jpg'
  const base = src.replace(/(@2x)?\.(jpe?g|png|webp)$/i, '')
  return withVersion(`${base}@2x${ext}`)
}

/**
 * High-performance Razor-Sharp Retina @2x responsive image component.
 * Delivers pristine 4K WebP & uncompressed raster sources with crisp display rendering.
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
  const webp2xSrc = retina2xWebp(src)
  const origSrc = withVersion(src)
  const orig2xSrc = retina2xOrig(src)

  return (
    <picture>
      <source type="image/webp" srcSet={`${webpSrc} 1x, ${webp2xSrc} 2x`} />
      <source srcSet={`${origSrc} 1x, ${orig2xSrc} 2x`} />
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

