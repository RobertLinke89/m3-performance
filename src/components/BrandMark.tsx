type Props = {
  className?: string
}

export function BrandMark({ className }: Props) {
  return (
    <span className={className ? `brand-mark ${className}` : 'brand-mark'}>
      M³ <span className="brand-fire">Performance</span>
    </span>
  )
}
