import { useState } from 'react'

const navIcons = [
  { src: 'https://www.figma.com/api/mcp/asset/109b4537-d5ff-4713-ba40-81f45fcae7ad', alt: 'Home' },
  { src: 'https://www.figma.com/api/mcp/asset/b02c681b-14d5-4f43-be17-7d3ab41f75af', alt: 'Account' },
  { src: 'https://www.figma.com/api/mcp/asset/5449d3ac-f4f7-410a-9b97-4ad5b52f8b8c', alt: 'People' },
  { src: 'https://www.figma.com/api/mcp/asset/a8f7c6b7-90a0-48a4-86af-2228e4c15069', alt: 'Channels' },
  { src: 'https://www.figma.com/api/mcp/asset/5ba5fb76-5199-4652-ba10-15290804265a', alt: 'AI' },
  { src: 'https://www.figma.com/api/mcp/asset/53c164e3-cc27-4a29-b69e-8d08a088fa4c', alt: 'Workspaces', active: true },
  { src: 'https://www.figma.com/api/mcp/asset/790534b1-9896-4328-b8b2-f324e37fa28c', alt: 'Objects & rules' },
  { src: 'https://www.figma.com/api/mcp/asset/7549f48c-bde4-401a-89f7-add84b4230b4', alt: 'Apps' },
]

export function NavRail() {
  return (
    <nav className="nav-rail">
      <div className="nav-rail-top">
        {navIcons.map((icon) => (
          <button
            key={icon.alt}
            className={`nav-item${icon.active ? ' nav-item--active' : ''}`}
          >
            <img src={icon.src} alt={icon.alt} width="20" height="20" />
          </button>
        ))}
      </div>
      <div className="nav-rail-bottom">
        <SubnavToggle />
      </div>
    </nav>
  )
}

function SubnavToggle() {
  // This toggle controls the subnav via a DOM class toggle
  // (kept simple since Subnav manages its own collapsed state)
  const [expanded, setExpanded] = useState(true)

  function handleClick() {
    const subnav = document.getElementById('subnav')
    if (subnav) {
      subnav.classList.toggle('subnav--collapsed')
    }
    setExpanded(!expanded)
  }

  return (
    <button
      className="nav-item"
      id="subnav-toggle"
      aria-expanded={expanded}
      aria-controls="subnav"
      onClick={handleClick}
    >
      <img
        src="https://www.figma.com/api/mcp/asset/03cb6376-c629-49cf-9adb-82094bd9e3cc"
        alt="Toggle sidebar"
        width="20"
        height="20"
      />
    </button>
  )
}
