import { Navigate, useParams } from 'react-router-dom'
import { modules, pillars } from '../content'
import { ModulePage } from './ModulePage'
import { PillarPage } from './PillarPage'

export function ResolvePage() {
  const { slug } = useParams()
  if (pillars.some((p) => p.slug === slug)) return <PillarPage />
  if (modules.some((m) => m.slug === slug)) return <ModulePage />
  return <Navigate to="/" replace />
}
