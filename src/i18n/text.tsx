'use client'

import type { ElementType } from 'react'
import { useI18n } from './provider'
import type { TranslationKey } from './dictionaries'

export function LocalizedText({
  k,
  as: Tag = 'span',
  className,
}: {
  k: TranslationKey
  as?: ElementType
  className?: string
}) {
  const { t } = useI18n()
  return <Tag className={className}>{t(k)}</Tag>
}
