import { isTodo } from '../../lib/utils.ts'

export function Tag({ children }: { children: string }) {
  return <span className={isTodo(children) ? 'tag tag-todo' : 'tag'}>{children}</span>
}

export function TodoChip({ children }: { children: string }) {
  return <span className="tag tag-todo">{children}</span>
}

/** Highlights a trailing or whole-string TODO without changing the surrounding copy. */
export function TodoText({ value }: { value: string }) {
  const index = value.toLowerCase().indexOf('todo')
  if (index < 0) return value
  if (index === 0) return <span className="todo-copy">{value}</span>
  return (
    <>
      {value.slice(0, index)}
      <span className="todo-copy">{value.slice(index)}</span>
    </>
  )
}
