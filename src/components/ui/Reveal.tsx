import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  immediate?: boolean
}

export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const transition = { duration: 0.45, delay }

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
