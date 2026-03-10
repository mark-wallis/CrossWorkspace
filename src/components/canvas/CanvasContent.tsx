import { useEffect, useState } from 'react'
import { useCanvas } from '../../context/CanvasContext.tsx'
import { fetchResourceContent } from '../../mocks/fetchResourceContent.ts'
import { CanvasContentSkeleton } from './CanvasContentSkeleton.tsx'
import type { ResourceContent } from '../../types/resources.ts'

export function CanvasContent() {
  const { activeResource } = useCanvas()
  const [content, setContent] = useState<ResourceContent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!activeResource) return

    setLoading(true)
    setContent(null)

    fetchResourceContent(activeResource.id).then((data) => {
      setContent(data)
      setLoading(false)
    })
  }, [activeResource?.id])

  if (loading) {
    return <CanvasContentSkeleton />
  }

  if (!content) return null

  return (
    <article className="canvas-article">
      <h1 className="canvas-article-title">{content.title}</h1>
      <div
        className="canvas-article-body"
        dangerouslySetInnerHTML={{ __html: content.body }}
      />
    </article>
  )
}
