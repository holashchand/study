export default function Callout({ type = 'note', children }) {
  return <div className={type}>{children}</div>
}
