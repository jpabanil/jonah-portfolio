import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/utils.ts'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClass: Record<Variant, string> = {
  primary: 'border border-transparent bg-accent text-on-accent hover:brightness-110',
  secondary: 'border border-border bg-surface text-text hover:border-accent',
  ghost: 'border border-border bg-transparent text-text hover:border-accent hover:text-accent-text',
}

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition disabled:cursor-not-allowed disabled:opacity-60'

type ButtonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
} & (
  | ({ href?: undefined } & ComponentProps<'button'>)
  | ({ href: string } & Omit<ComponentProps<'a'>, 'href'> & { href: string })
)

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variantClass[variant], className)

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ComponentProps<'button'>
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
