const subnavItems = [
  'Agent Workspace',
  'Views',
  'Macros',
  'Shortcuts',
  'Dynamic content',
  'Cards',
  'Layouts',
  'Contextual workspaces',
  'Agent interface',
  'Context panel',
]

export function Subnav() {
  return (
    <aside className="subnav" id="subnav">
      <h2 className="subnav-heading">Workspaces</h2>
      <div className="subnav-group-header">
        <span className="subnav-group-label">Agent tools</span>
        <hr className="subnav-group-line" />
      </div>
      <ul className="subnav-list">
        {subnavItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={`subnav-link${item === 'Macros' ? ' subnav-link--active' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
