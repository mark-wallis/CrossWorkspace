import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { ResourceReference } from '../types/resources.ts'

interface CanvasState {
  isOpen: boolean
  activeResource: ResourceReference | null
  openCanvas: (resource: ResourceReference) => void
  closeCanvas: () => void
}

const CanvasContext = createContext<CanvasState | null>(null)

export function CanvasProvider({ children }: { children: ReactNode }) {
  const [activeResource, setActiveResource] = useState<ResourceReference | null>(null)

  const openCanvas = useCallback((resource: ResourceReference) => {
    setActiveResource((prev) => {
      if (prev && prev.id === resource.id) return prev
      return resource
    })
  }, [])

  const closeCanvas = useCallback(() => {
    setActiveResource(null)
  }, [])

  return (
    <CanvasContext.Provider value={{
      isOpen: activeResource !== null,
      activeResource,
      openCanvas,
      closeCanvas,
    }}>
      {children}
    </CanvasContext.Provider>
  )
}

export function useCanvas() {
  const context = useContext(CanvasContext)
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider')
  }
  return context
}
