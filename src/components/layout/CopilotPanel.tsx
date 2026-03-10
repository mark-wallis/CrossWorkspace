import { useCanvas } from '../../context/CanvasContext.tsx'
import { Canvas } from '../canvas/Canvas.tsx'

export function CopilotPanel() {
  const { isOpen, openCanvas } = useCanvas()

  function handleResourceClick() {
    openCanvas({ id: '1', title: 'New Agent Onboarding', type: 'article' })
  }

  const panelClass = `copilot-panel${isOpen ? ' copilot-panel--expanded' : ''}`

  return (
    <aside className={panelClass} id="copilot-panel">
      <div className="copilot-card">

        {/* Canvas section — only visible when expanded */}
        {isOpen && (
          <div className="copilot-canvas-section">
            <Canvas />
          </div>
        )}

        {/* Conversation section */}
        <div className="copilot-conversation-section">

          {/* Copilot header */}
          <div className="copilot-header">
            <div className="copilot-header-label">
              <span className="copilot-header-title">Help with macros</span>
              <button className="copilot-icon-btn copilot-icon-btn--round">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 16 16">
                  <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
                </svg>
              </button>
            </div>
            <div className="copilot-header-icons">
              <button className="copilot-icon-btn">
                <img src="https://www.figma.com/api/mcp/asset/f74e12c0-194d-46ec-af77-ed425abba340" alt="History" width="16" height="16" />
              </button>
              <button className="copilot-icon-btn">
                <img src="https://www.figma.com/api/mcp/asset/d654a8d8-4f21-4e0a-b029-4c74753ec8b1" alt="Notes" width="16" height="16" />
              </button>
              <button className="copilot-icon-btn" id="copilot-close">
                <img src="https://www.figma.com/api/mcp/asset/9955dc56-ff01-4826-a9d0-d44cd4ad5d3c" alt="Close" width="16" height="16" />
              </button>
            </div>
          </div>

          {/* Copilot conversation */}
          <div className="copilot-body">
            <div className="copilot-content">

              {/* User message */}
              <div className="copilot-msg-user">
                <div className="copilot-bubble">
                  Now update the New Agent Onboarding article to include a section about this macro.
                </div>
              </div>

              {/* AI response */}
              <div className="copilot-msg-ai">
                <img src="https://www.figma.com/api/mcp/asset/aaea5397-94df-48e3-9baf-3262ba50d92a" alt="" className="copilot-sparkle" width="16" height="16" />
                <p className="copilot-ai-text">I found the article.</p>
              </div>

              {/* Resource card — clicking opens the canvas */}
              <div className="copilot-preview-wrap">
                <button
                  className={`copilot-preview-card${isOpen ? ' copilot-preview-card--active' : ''}`}
                  onClick={handleResourceClick}
                  type="button"
                >
                  <div className="copilot-preview-icon">
                    <img src="https://www.figma.com/api/mcp/asset/452aa65c-bd64-4f93-bfce-a3c6dfd229f8" alt="" width="12" height="12" />
                  </div>
                  <div className="copilot-preview-text">
                    <span className="copilot-preview-title">New Agent Onboarding</span>
                    <span className="copilot-preview-subtitle">Article</span>
                  </div>
                </button>
              </div>

            </div>
            <div className="copilot-body-fade"></div>
          </div>

          {/* Scoped prompt input */}
          <div className="copilot-input-area">
            <div className="copilot-input-bg"></div>
            <div className="copilot-scope-row">
              <span className="copilot-scope-label">Workspace → Knowledge</span>
              <button className="copilot-scope-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable={false} viewBox="0 0 12 12">
                  <path stroke="currentColor" strokeLinecap="round" d="M3 9l6-6m0 6L3 3"/>
                </svg>
              </button>
            </div>
            <div className="copilot-input-wrap">
              <div className="copilot-input-pill">
                <input type="text" className="copilot-input" placeholder="Reply..." />
                <button className="copilot-send-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 16 16" fill="none">
                    <path d="M8 13V3m0 0l4 4M8 3L4 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </aside>
  )
}
