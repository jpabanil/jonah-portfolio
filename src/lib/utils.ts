export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export function isTodo(value: string): boolean {
  return value.toLowerCase().includes('todo')
}

export function isHttpUrl(value: string): boolean {
  return value.startsWith('https://') || value.startsWith('http://')
}

/** Ignore placeholder strings so the page never requests a missing file. */
export function mediaSrc(value: string | undefined): string | undefined {
  if (!value || value.startsWith('TODO')) return undefined
  if (value.startsWith('/')) return value
  return undefined
}

export function mailtoHref(email: string, subject = '', body = ''): string {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : '',
    body ? `body=${encodeURIComponent(body)}` : '',
  ].filter(Boolean)
  return `mailto:${email}${params.length ? `?${params.join('&')}` : ''}`
}
