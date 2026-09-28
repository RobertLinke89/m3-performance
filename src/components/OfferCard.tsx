import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { Img } from './Img'
import { useUi } from '../copy'

type Offer = {
  slug: string
  badge: string
  title: string
  kicker: string
  text: string
  image: string
}

export function OfferCard({ offer }: { offer: Offer }) {
  const t = useUi()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <article className={`card offer-card${open ? ' is-open' : ''}`}>
      <Img className="card-media" src={offer.image} alt="" />
      <div className="mark">{offer.badge}</div>
      <h3>{offer.title}</h3>
      <p>{offer.kicker}</p>
      {open && (
        <p id={panelId} className="offer-card-text">
          {offer.text}
        </p>
      )}
      <div className="cta-row">
        <button
          type="button"
          className="btn btn-ghost"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.lessLearn : t.moreLearn}
        </button>
        <Link className="btn btn-ghost" to={`/${offer.slug}`}>
          {t.details}
        </Link>
      </div>
    </article>
  )
}
