import { Link, useNavigate } from 'react-router-dom'
import { useUi } from '../copy'

type Props = {
  fallback?: string
  label?: string
  home?: boolean
}

export function BackLink({ fallback = '/', label, home = true }: Props) {
  const t = useUi()
  const navigate = useNavigate()
  const text = label ?? t.back

  return (
    <p className="back-link">
      <button
        type="button"
        className="back-link-btn"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1)
            return
          }
          navigate(fallback)
        }}
      >
        ← {text}
      </button>
      {home ? (
        <Link className="back-link-home" to={fallback}>
          {t.backHome}
        </Link>
      ) : null}
    </p>
  )
}
