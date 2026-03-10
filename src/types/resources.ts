export interface ResourceReference {
  id: string
  title: string
  type: 'article' | 'macro' | 'trigger'
}

export interface ResourceContent {
  id: string
  title: string
  type: 'article' | 'macro' | 'trigger'
  body: string
  status: 'draft' | 'published'
  updatedAt: string
}
