import { useCanvas } from '../../context/CanvasContext.tsx'
import { CanvasToolbar } from './CanvasToolbar.tsx'
import { CanvasContent } from './CanvasContent.tsx'

export function Canvas() {
  const { activeResource } = useCanvas()

  if (!activeResource) return null

  return (
    <div className="canvas-container">
      <CanvasToolbar />
      <div className="canvas-body" key={activeResource.id}>
        <CanvasContent />
      </div>
    </div>
  )
}
