export default function Badge({ variant, children }) {
  const cls = ['badge', variant].filter(Boolean).join(' ')
  return <span className={cls}>{children}</span>
}
