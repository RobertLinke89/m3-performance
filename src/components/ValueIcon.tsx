type IconId = 'autonomy' | 'system' | 'honesty' | 'practice'

const ICONS = new Set<string>(['autonomy', 'system', 'honesty', 'practice'])

export function ValueIcon({ name }: { name: string }) {
  const id = (ICONS.has(name) ? name : 'system') as IconId
  return (
    <span className="value-icon" aria-hidden>
      <svg viewBox="0 0 48 48" fill="none" className="value-icon-svg">
        {id === 'autonomy' && (
          <>
            {/* Key unlocking own path */}
            <circle cx="18" cy="24" r="8" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="18" cy="24" r="2.6" fill="currentColor" />
            <path
              d="M26 24h14M36 24v5.5M40 24v3.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M12 12c3-3 9-3 12 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
          </>
        )}
        {id === 'system' && (
          <>
            {/* Ordered pillars / stack with priority */}
            <rect x="8" y="30" width="32" height="6" rx="1.5" fill="currentColor" opacity="0.35" />
            <rect x="12" y="21" width="24" height="6" rx="1.5" fill="currentColor" opacity="0.65" />
            <rect x="16" y="12" width="16" height="6" rx="1.5" fill="currentColor" />
            <path
              d="M24 8v4M24 36v4"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </>
        )}
        {id === 'honesty' && (
          <>
            {/* Straight speech / unfiltered truth */}
            <path
              d="M10 14h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H20l-7 6v-6h-3a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="M16 22h12M16 26h8"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="38" cy="14" r="5" stroke="currentColor" strokeWidth="2.2" />
            <path d="M38 11.5v3l2 1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        {id === 'practice' && (
          <>
            {/* Body in motion / grounded practice */}
            <circle cx="28" cy="11" r="4" stroke="currentColor" strokeWidth="2.3" />
            <path
              d="M18 42c2-8 6-14 12-18M22 24l-8 4M30 28l8 10"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 42h28"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M34 18l6-2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  )
}
