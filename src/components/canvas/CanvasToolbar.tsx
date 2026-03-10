import { IconButton } from '@zendeskgarden/react-buttons'
import { useCanvas } from '../../context/CanvasContext.tsx'

export function CanvasToolbar() {
  const { closeCanvas } = useCanvas()

  return (
    <div className="canvas-toolbar">
      <div className="canvas-toolbar-left">
        {/* Heading level */}
        <button className="canvas-toolbar-btn" aria-label="Heading">
          <span className="canvas-toolbar-btn-text">H</span>
        </button>

        {/* Text style (bold/italic) */}
        <button className="canvas-toolbar-btn" aria-label="Text style">
          <span className="canvas-toolbar-btn-text canvas-toolbar-btn-text--sm">AA</span>
        </button>

        {/* Text color */}
        <button className="canvas-toolbar-btn" aria-label="Text color">
          <span className="canvas-toolbar-color-icon">
            <span className="canvas-toolbar-btn-text">A</span>
            <span className="canvas-toolbar-color-bar"></span>
          </span>
        </button>

        {/* List / indent */}
        <button className="canvas-toolbar-btn" aria-label="List">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4h8M5 8h8M5 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="2.5" cy="4" r="0.75" fill="currentColor"/>
            <circle cx="2.5" cy="8" r="0.75" fill="currentColor"/>
            <circle cx="2.5" cy="12" r="0.75" fill="currentColor"/>
          </svg>
        </button>

        {/* Divider */}
        <div className="canvas-toolbar-divider"></div>

        {/* Kebab menu (three dots) */}
        <button className="canvas-toolbar-btn" aria-label="More options">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="3" r="1.25" fill="currentColor"/>
            <circle cx="8" cy="8" r="1.25" fill="currentColor"/>
            <circle cx="8" cy="13" r="1.25" fill="currentColor"/>
          </svg>
        </button>

        {/* Sparkle / AI action */}
        <button className="canvas-toolbar-btn" aria-label="AI assist">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1l1.5 4.5L14 7l-4.5 1.5L8 13l-1.5-4.5L2 7l4.5-1.5L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M12.5 1.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L10 3.5l1.5-.5.5-1.5z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="canvas-toolbar-right">
        <button className="canvas-publish-btn">
          Publish
        </button>
        <IconButton onClick={closeCanvas} aria-label="Close canvas" size="small">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 12 12">
            <path stroke="currentColor" strokeLinecap="round" d="M3 9l6-6m0 6L3 3"/>
          </svg>
        </IconButton>
      </div>
    </div>
  )
}
