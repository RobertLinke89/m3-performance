import * as de from './content'
import * as en from './content-en'
import { useLocale } from './locale'

export function useContent() {
  const { lang } = useLocale()
  return lang === 'en' ? en : de
}
