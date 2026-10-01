import { useLocale } from '../locale'

const PAYMENT_METHODS = [
  { name: 'Visa', src: '/images/payments/visa.svg' },
  { name: 'Mastercard', src: '/images/payments/mastercard.svg' },
  { name: 'American Express', src: '/images/payments/amex.svg' },
  { name: 'Apple Pay', src: '/images/payments/apple-pay.svg' },
  { name: 'Google Pay', src: '/images/payments/google-pay.svg' },
  { name: 'PayPal', src: '/images/payments/paypal.svg' },
  { name: 'Klarna', src: '/images/payments/klarna.svg' },
  { name: 'SEPA', src: '/images/payments/sepa.svg' },
]

export function PaymentLogos() {
  const { lang } = useLocale()
  const isEn = lang === 'en'

  return (
    <div className="footer-payment-wrap">
      <div className="footer-payment-top">
        <div className="footer-payment-brand">
          <span className="footer-payment-kicker">
            {isEn ? 'SECURE CHECKOUT' : 'SICHER BEZAHLEN'}
          </span>
          <div className="footer-payment-stripe-logo" title="Powered by Stripe" aria-label="Stripe">
            <img
              src="/images/payments/stripe-logo.svg"
              alt="Stripe"
              width="56"
              height="22"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="footer-payment-badges">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.name} className="pay-badge" title={method.name}>
              <img
                src={method.src}
                alt={method.name}
                width="38"
                height="25"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="footer-payment-sub">
        {isEn
          ? '256-bit encrypted checkout. All major credit cards, Apple Pay, Google Pay, PayPal, Klarna & SEPA accepted.'
          : '256-Bit SSL-verschlüsselte Abwicklung. Kreditkarten, Apple Pay, Google Pay, PayPal, Klarna & SEPA.'}
      </p>
    </div>
  )
}
