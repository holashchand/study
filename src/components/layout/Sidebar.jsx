export default function Sidebar({ sections, currentIdx, onNavigate }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-title">In This Chapter</div>
      <ul>
        {sections.map((sec, idx) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={idx === currentIdx ? 'active' : ''}
              onClick={e => { e.preventDefault(); onNavigate(idx) }}
            >
              {sec.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
