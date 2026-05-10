export default function Diagram({ label, children }) {
  return (
    <>
      {label && <p className="syntax-label">{label}</p>}
      <pre className="diagram">{children}</pre>
    </>
  )
}
