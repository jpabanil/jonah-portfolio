import type { ReactNode } from 'react'
import { cn } from '../../lib/utils.ts'

type CardProps = {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div className={cn('surface-card', className)} data-interactive={interactive ? 'true' : 'false'}>
      {children}
    </div>
  )
}
