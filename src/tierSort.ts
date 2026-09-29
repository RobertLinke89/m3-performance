const TIER_ORDER = ['free', 'entry', 'core', 'premium', 'high'] as const

export type OfferTier = (typeof TIER_ORDER)[number]

export function tierRank(tier: string | undefined): number {
  const i = TIER_ORDER.indexOf(tier as OfferTier)
  return i === -1 ? 99 : i
}

export function byTier(a: { tier?: string } | null | undefined, b: { tier?: string } | null | undefined): number {
  return tierRank(a?.tier) - tierRank(b?.tier)
}
