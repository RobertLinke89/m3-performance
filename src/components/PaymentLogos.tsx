import { useLocale } from '../locale'

export function PaymentLogos() {
  const { lang } = useLocale()
  const isEn = lang === 'en'

  return (
    <div className="footer-payment-wrap">
      <div className="footer-payment-header">
        <span className="footer-payment-kicker">
          {isEn ? 'SECURE PAYMENT VIA STRIPE' : 'SICHER BEZAHLEN ÜBER STRIPE'}
        </span>
        <div className="footer-payment-stripe-logo" aria-label="Stripe">
          <svg viewBox="0 0 60 25" height="20" fill="#635BFF" role="img">
            <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v2.68c-1.25.6-2.89.92-4.63.92-4.14 0-6.42-2.55-6.42-6.52 0-3.66 2.15-6.47 5.79-6.47 3.66 0 5.4 2.76 5.4 6.22 0 .58-.05 1.15-.12 1.57h.79zm-7.98-2.15h4.63c-.09-1.57-1.04-2.31-2.27-2.31-1.25 0-2.18.77-2.36 2.31zM36.78 6.74h3.75v12.44h-3.75V6.74zm-.12-4.24c0-1.23.97-2.13 2.18-2.13 1.2 0 2.15.9 2.15 2.13 0 1.2-.95 2.13-2.15 2.13-1.2 0-2.18-.92-2.18-2.13zm-8.8 4.24h3.63v2.01h.05c.81-1.39 2.22-2.29 4.03-2.29.58 0 1.04.07 1.39.19v3.47c-.51-.19-1.11-.28-1.83-.28-2.52 0-3.52 1.6-3.52 4.03v5.32h-3.75V6.74zm-9.03 9.4c0 1.13.9 1.76 2.08 1.76 1.06 0 1.94-.28 2.82-.74v2.75c-.97.46-2.22.69-3.47.69-3.1 0-5.18-1.55-5.18-4.51v-6.6h-2.18V6.74h2.18V3.06l3.75-.79v4.47h3.75v2.75h-3.75v6.65zm-11.41-3.61c0-3.87 2.5-6.76 6.34-6.76 1.71 0 3.06.49 4.07 1.18l-1.39 2.62c-.74-.46-1.57-.81-2.64-.81-1.99 0-3.26 1.48-3.26 3.63 0 2.27 1.34 3.73 3.33 3.73 1.09 0 2-.37 2.78-.88l1.34 2.57c-1.09.83-2.52 1.34-4.33 1.34-4.03 0-6.24-2.82-6.24-6.62zM.6 16.32l1.97-2.27c1.37 1.16 3.1 1.83 4.88 1.83 1.62 0 2.45-.58 2.45-1.48 0-2.27-7.22-1.02-7.22-5.49 0-2.64 2.15-4.42 5.56-4.42 1.92 0 3.68.58 4.98 1.67L11.41 8.6c-1.18-.88-2.59-1.37-4.07-1.37-1.39 0-2.06.58-2.06 1.3 0 2.18 7.15 1.02 7.15 5.44 0 2.66-2.06 4.54-5.83 4.54-2.2 0-4.35-.74-5.99-2.19z" />
          </svg>
        </div>
      </div>

      <div className="footer-payment-badges">
        {/* 1. Visa */}
        <div className="pay-badge pay-badge--white" title="Visa">
          <svg viewBox="0 0 48 16" width="36" height="13">
            <path
              fill="#1434CB"
              d="M19.4 0.6L12.7 15.4H8.4L5.1 3.3C4.9 2.5 4.3 1.8 3.5 1.4C2.1 0.7 0.8 0.2 0 0.1L0.1 0.6H7.1C8 0.6 8.8 1.2 9 2.1L10.7 11.2L15.1 0.6H19.4ZM36.6 10.5C36.6 6.5 31 6.3 31 4.5C31 3.9 31.6 3.2 32.8 3.1C33.4 3 35.1 2.9 36.7 3.7L37.4 0.8C36.4 0.4 35.2 0.1 33.6 0.1C29.5 0.1 26.6 2.3 26.6 5.4C26.6 7.7 28.7 9 30.3 9.8C31.9 10.6 32.5 11.1 32.5 11.8C32.5 12.9 31.2 13.4 30 13.4C27.9 13.4 26.7 13.1 25.4 12.5L24.6 15.5C25.8 16.1 27.8 16.5 29.8 16.5C34.2 16.5 37.1 14.3 37.1 11C37.1 10.7 36.6 10.5 36.6 10.5ZM47.8 15.4H51.5L48.2 0.6H44.8C44 0.6 43.3 1.1 43 1.8L36.7 15.4H41L41.9 12.9H47.1L47.8 15.4ZM43 9.8L45.2 3.7L46.4 9.8H43ZM25.8 0.6L22.4 15.4H18.3L21.7 0.6H25.8Z"
            />
          </svg>
        </div>

        {/* 2. Mastercard */}
        <div className="pay-badge pay-badge--white" title="Mastercard">
          <svg viewBox="0 0 36 24" width="30" height="20">
            <circle cx="12" cy="12" r="10" fill="#EB001B" />
            <circle cx="24" cy="12" r="10" fill="#F79E1B" />
            <path
              d="M18 5.66A9.97 9.97 0 0 1 21.94 12 9.97 9.97 0 0 1 18 18.34 9.97 9.97 0 0 1 14.06 12 9.97 9.97 0 0 1 18 5.66Z"
              fill="#FF5F00"
            />
          </svg>
        </div>

        {/* 3. Amex */}
        <div className="pay-badge pay-badge--amex" title="American Express">
          <svg viewBox="0 0 36 24" width="34" height="22">
            <rect width="36" height="24" rx="4" fill="#006FCF" />
            <path
              fill="#ffffff"
              d="M5.5 16.5l3.8-9h3.6l3.8 9h-2.6l-.7-1.8H9.8l-.7 1.8H5.5zm4.8-3.6h2.6l-1.3-3.2-1.3 3.2zm11.9 3.6l-2.6-4.5-2.6 4.5h-2.5l3.8-6.3-3.5-5.7h2.5l2.3 4.1 2.3-4.1h2.5l-3.5 5.7 3.8 6.3h-2.6z"
            />
          </svg>
        </div>

        {/* 4. Apple Pay */}
        <div className="pay-badge pay-badge--white" title="Apple Pay">
          <svg viewBox="0 0 38 24" width="34" height="20">
            <path
              fill="#000000"
              d="M10.8 10.4c-.6.8-1.5 1.3-2.4 1.2-.1-.9.3-1.8.8-2.4.6-.7 1.6-1.2 2.4-1.2.1 1-.2 1.8-.8 2.4zm.8 1.3c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 1 1.4 1.7 2.1 2.8 2.1.8 0 1.5-.7 2.5-.7 1.1 0 1.6.7 2.6.7 1.1 0 2-.9 2.8-2 1-1.3 1.3-2.6 1.3-2.7-.1-.1-2.4-.9-2.4-3.6 0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.6-3.1-1.7-.5.1-1.1.2-1.5.3zm9.6-1.5h-3.9v13.5h2.1v-4.8h1.8c2.9 0 4.8-1.9 4.8-4.4 0-2.4-1.8-4.3-4.8-4.3zm-.2 6.9h-1.6v-5.1h1.6c1.8 0 2.8 1 2.8 2.6s-1 2.5-2.8 2.5zm10.7-3.4c-1.7 0-2.8.9-3.2 1.7v-1.5h-1.9v9.7h2v-4.9c0-1.6.9-2.4 2.1-2.4.4 0 .7.1.9.2l.6-1.8c-.5 0-.9-.1-1.1-.1zm6.3-3.5l-2.4 6.7-2.3-6.7h-2.2l3.4 8.7-2.1 4.7h2.1l6.7-13.4h-2.2z"
            />
          </svg>
        </div>

        {/* 5. Google Pay */}
        <div className="pay-badge pay-badge--white" title="Google Pay">
          <svg viewBox="0 0 38 24" width="34" height="20">
            <path
              fill="#4285F4"
              d="M12.4 12.1c0-.4 0-.8-.1-1.1H6.6v2.2h3.3c-.1.8-.6 1.4-1.3 1.9v1.5h2.1c1.2-1.1 1.9-2.8 1.9-4.5z"
            />
            <path
              fill="#34A853"
              d="M6.6 18c1.6 0 3-.5 4-1.5l-2.1-1.5c-.5.4-1.2.6-1.9.6-1.5 0-2.8-1-3.2-2.4H1.2v1.6C2.3 16.9 4.3 18 6.6 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.4 13.2c-.1-.4-.2-.8-.2-1.2 0-.4.1-.8.2-1.2V9.2H1.2C.4 10.8 0 11.4 0 12s.4 1.2 1.2 2.8l2.2-1.6z"
            />
            <path
              fill="#EA4335"
              d="M6.6 8.3c.9 0 1.7.3 2.3.9l1.7-1.7C9.6 6.6 8.2 6 6.6 6 4.3 6 2.3 7.1 1.2 9.2l2.2 1.6c.4-1.4 1.7-2.5 3.2-2.5z"
            />
            <path
              fill="#5F6368"
              d="M18.8 9.5h-3.3v7.9h1.7v-2.8h1.6c2.4 0 4-1.6 4-3.7-.1-2.1-1.6-3.7-4-3.7zm-.1 5.4h-1.6v-3.7h1.6c1.4 0 2.3.9 2.3 2 0 1-.9 1.7-2.3 1.7zm9.6-2.5c-1.4 0-2.4.7-2.8 1.4v-1.2h-1.6v6.4h1.7v-3.3c0-1.3.8-2 1.8-2 .3 0 .6.1.8.2l.5-1.5c-.4 0-.8-.1-1-.1zm4.8-2.9l-2 5.5-1.9-5.5h-1.8l2.8 7.1-1.7 3.8h1.7l5.5-10.9h-1.9z"
            />
          </svg>
        </div>

        {/* 6. PayPal */}
        <div className="pay-badge pay-badge--white" title="PayPal">
          <svg viewBox="0 0 36 24" width="30" height="20">
            <path
              fill="#003087"
              d="M14.6 4h-6c-.5 0-.9.4-1 .9L5 19.3c0 .3.2.5.5.5h3.4l.9-5.4c.1-.4.5-.7.9-.7h2.2c4.4 0 7-2.1 7.6-6.1.3-1.8-.1-3.2-1.1-4.2-1.1-1.1-2.8-1.5-4.8-1.5z"
            />
            <path
              fill="#0079C1"
              d="M15.4 7.6h-2.5l-.9 5.8c0 .2.2.4.4.4h1.9c3.2 0 5.1-1.6 5.6-4.6.2-1.4-.1-2.4-.9-3.2-.8-.8-2.1-1.1-3.6-1.1z"
            />
            <path
              fill="#00457C"
              d="M12.9 7.6l-.9 5.8c0 .2.2.4.4.4h1.9c3.2 0 5.1-1.6 5.6-4.6.1-.5.1-.9 0-1.3-.7 1.8-2.4 2.8-5 2.8h-1.5l.7-4.2c0-.2-.1-.4-.3-.4l-.9 1.5z"
            />
          </svg>
        </div>

        {/* 7. Klarna */}
        <div className="pay-badge pay-badge--klarna" title="Klarna">
          <svg viewBox="0 0 44 24" width="38" height="22">
            <rect width="44" height="24" rx="6" fill="#FFB3C7" />
            <path
              fill="#0A0A0A"
              d="M7 6h2.2v12H7V6zm9.8 0h2.4l-4.1 6 4.6 6H17l-3.7-5v5h-2.2V6h2.2v4.8l3.7-4.8zm6.5 12h-2.2V9.8h2.2v1.3c.6-1 1.7-1.5 2.8-1.5 2.1 0 3.6 1.6 3.6 4.2 0 2.7-1.6 4.3-3.8 4.3-1.1 0-2.1-.5-2.6-1.4v1.3zm2.2-4.4c0 1.4.9 2.4 2 2.4s2-.9 2-2.4c0-1.4-.9-2.3-2-2.3s-2 1-2 2.3zm10 4.4h-2.1v-8.2h2.1v1.2c.6-.9 1.5-1.4 2.6-1.4.3 0 .7.1.9.2v2.2c-.4-.1-.8-.2-1.3-.2-1.3 0-2.2.9-2.2 2.3v3.9zm6.1 0c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"
            />
          </svg>
        </div>

        {/* 8. SEPA */}
        <div className="pay-badge pay-badge--sepa" title="SEPA">
          <svg viewBox="0 0 38 24" width="34" height="22">
            <rect width="38" height="24" rx="4" fill="#002D72" />
            <text
              x="50%"
              y="63%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFCC00"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="10"
              letterSpacing="0.8"
            >
              SEPA
            </text>
          </svg>
        </div>
      </div>

      <p className="footer-payment-sub">
        {isEn
          ? 'Visa, Mastercard, American Express, Apple Pay, Google Pay, PayPal, Klarna and SEPA — availability depending on country. Payments processed by Stripe.'
          : 'Visa, Mastercard, American Express, Apple Pay, Google Pay, PayPal, Klarna und SEPA — Verfügbarkeit je nach Land. Zahlungen werden von Stripe verarbeitet.'}
      </p>
    </div>
  )
}
