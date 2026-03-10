import { useCanvas } from '../../context/CanvasContext.tsx'
import { IconButton } from '@zendeskgarden/react-buttons'

export function CanvasPlaceholder() {
  const { activeResource, closeCanvas } = useCanvas()

  if (!activeResource) return null

  return (
    <div className="canvas-container">
      <div className="canvas-toolbar-placeholder">
        <span className="canvas-resource-title">{activeResource.title}</span>
        <IconButton onClick={closeCanvas} aria-label="Close canvas" size="small">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 12 12">
            <path stroke="currentColor" strokeLinecap="round" d="M3 9l6-6m0 6L3 3"/>
          </svg>
        </IconButton>
      </div>
      <div className="canvas-body-placeholder">
        <p className="canvas-placeholder-text">Canvas will render here — Phase 2 adds the toolbar, Phase 3 adds article content.</p>
      </div>
    </div>
  )
}
