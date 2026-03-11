import { useCanvas } from '../../context/CanvasContext.tsx'
import sparkleIcon from '../../assets/purple-gradient-sparkle-icon.svg'

export function Header() {
  const { copilotVisible, toggleCopilot } = useCanvas()

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src="https://www.figma.com/api/mcp/asset/c3b2a4a4-5f8c-446e-8d33-073464611fe0" alt="Zendesk logo" width="24" height="24" />
        </div>
        <button className="header-product-tray">
          <span className="header-product-label">Admin center</span>
          <svg className="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 16 16">
            <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
          </svg>
        </button>
      </div>

      <div className="header-right">
        <div className="header-middle">
          <div className="header-env">
            <div className="header-separator"></div>
            <div className="header-workspace-name">z3n-ai-demo</div>
          </div>
          <div className="header-actions">
            <div className="header-search">
              <img src="https://www.figma.com/api/mcp/asset/2d398e42-b6d0-4664-8faf-9308539bb4b4" alt="" className="search-icon" width="16" height="16" />
              <span className="search-placeholder">Search admin center...</span>
            </div>
          </div>
        </div>
        <button className={`header-icon-btn${copilotVisible ? ' header-icon-btn--active' : ''}`} id="copilot-toggle" onClick={toggleCopilot} aria-label="Copilot">
          <img src={sparkleIcon} alt="" width="16" height="16" className="copilot-toggle-icon" />
        </button>
        <button className="header-icon-btn">
          <img src="https://www.figma.com/api/mcp/asset/ce1814a4-98ca-431f-be62-edeee2c9f6cc" alt="Help" width="20" height="20" />
        </button>
        <button className="header-icon-btn">
          <img src="https://www.figma.com/api/mcp/asset/1dbe76c8-eb42-43a7-b450-a8851e347252" alt="Profile" width="20" height="20" />
        </button>
      </div>
    </header>
  )
}
