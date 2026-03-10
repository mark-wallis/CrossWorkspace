import type { ResourceContent } from '../types/resources.ts'

const ARTICLES: Record<string, ResourceContent> = {
  '1': {
    id: '1',
    title: 'New Agent Onboarding',
    type: 'article',
    status: 'draft',
    updatedAt: '2026-03-08T14:30:00Z',
    body: `
<p>We're thrilled to have you on board. As a CX Agent, you are the voice of our company — the first point of contact for customers who need help, answers, or reassurance. Your work directly shapes how customers feel about us.</p>

<h2>Your Role at a Glance</h2>
<p>As a CX Agent, your core responsibilities are:</p>
<ul>
  <li>Respond to customer inquiries via email, chat, and/or phone</li>
  <li>Resolve issues efficiently while maintaining a positive tone</li>
  <li>Escalate complex or sensitive cases to a Team Lead</li>
  <li>Log all interactions accurately in the support system</li>
  <li>Follow company policies and maintain customer confidentiality</li>
</ul>

<h2>Communication Guidelines</h2>
<p>Every customer interaction should reflect these principles:</p>
<ul>
  <li>Be empathetic — acknowledge the customer's frustration or concern first</li>
  <li>Be clear — use simple, jargon-free language</li>
  <li>Be concise — get to the solution quickly without over-explaining</li>
  <li>Stay professional — even if a customer is rude, remain calm and respectful</li>
  <li>Follow up — confirm the issue is resolved before closing a case</li>
</ul>

<h2>Day 1 Checklist</h2>
<ul>
  <li>Set up your work accounts and log into all tools</li>
  <li>Review the Customer Service Handbook (shared in your onboarding email)</li>
  <li>Complete IT security and data privacy training</li>
  <li>Shadow a senior agent for at least two live interactions</li>
  <li>Introduce yourself in the team chat channel</li>
  <li>Schedule a check-in with your Team Lead for end of week</li>
</ul>
`.trim(),
  },
}

export function fetchResourceContent(id: string): Promise<ResourceContent> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const content = ARTICLES[id]
      if (content) {
        resolve(content)
      } else {
        reject(new Error(`Resource ${id} not found`))
      }
    }, 400)
  })
}
