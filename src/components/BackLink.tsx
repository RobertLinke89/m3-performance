import { Link, useNavigate } from 'react-router-dom'
import { useUi } from '../copy'

type Props = {
  fallback?: string
  label?: string
}

export function BackLink({ fallback = '/', label }: Props) {
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
      <Link className="back-link-home" to={fallback}>
        {t.backHome}
      </Link>
    </p>
  )
}
