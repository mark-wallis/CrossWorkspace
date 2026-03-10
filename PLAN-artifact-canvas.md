# Artifact Canvas — Build Plan

## Starting Point

The default state is already built:
- Left nav with Workspaces menu
- Main content area showing the macro edit form ("Premium Customer — Priority Handling")
- AI side panel (right) with chat: user message, AI response with sparkle icon, and a clickable resource card ("New Agent Onboarding / Article")
- Reply input at the bottom of the side panel with "Workspace → Knowledge" context pill

**What this plan covers:** Building the canvas that opens in the main content area when the user clicks the "New Agent Onboarding" resource card. The side panel stays untouched. The canvas replaces the macro form and displays the article with an editor toolbar.

---

## Layout Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  Admin Center top bar                                            │
├────────┬─────────────────────────────────┬───────────────────────┤
│        │                                 │                       │
│  Left  │   CANVAS (replaces macro form)  │   AI Side Panel       │
│  nav   │                                 │   (unchanged)         │
│        │   ┌─────────────────────────┐   │                       │
│        │   │ Toolbar: H AA A ≡ │ ⋮ ✦ │   │                       │
│        │   │          Publish   ✕    │   │                       │
│        │   ├─────────────────────────┤   │                       │
│        │   │                         │   │                       │
│        │   │ Article title           │   │                       │
│        │   │ Article body            │   │                       │
│        │   │ (scrollable)            │   │                       │
│        │   │                         │   │                       │
│        │   └─────────────────────────┘   │                       │
│        │                                 │                       │
├────────┴─────────────────────────────────┴───────────────────────┤
```

---

## Design Principles

- **Canvas replaces, doesn't overlay.** The macro form is swapped out for the canvas. Closing the canvas restores the form.
- **Editor-ready from the start.** Toolbar is always visible, signaling editability even before editing is functional.
- **Match Zendesk density.** The canvas should feel native — same type scale, spacing, and component patterns as the rest of Admin Center.
- **Incremental build.** Each phase is a demoable checkpoint.

---

## Tech & Design System Notes

- **Zendesk Garden** (`@zendeskgarden/react-*`) for all components
- `ThemeProvider` wrapper required at the app root
- React functional components with hooks
- Canvas state shared between the side panel (trigger) and main area (renderer) via React Context
- Toolbar icons can use Garden's icon set or inline SVGs matching the Figma spec

---

## Target Screenshot Reference

When the canvas is open, the main content area shows:

**Toolbar row (sticky top):**
- Left group: heading button (H), text style button (AA), text color button (A with colored underline), list/indent button — then a vertical divider — then kebab menu (three dots), sparkle/magic wand icon
- Right group: "Publish" button (Garden primary button), close button (✕)
- Toolbar has a light bottom border separating it from the content

**Content area (scrollable below toolbar):**
- Article title: "New Agent Onboarding" — large, roughly 24-28px, bold
- Intro paragraph: welcoming text for a new CX Agent
- Section heading: "Your Role at a Glance" — bold, medium size
- Bulleted list: core responsibilities (5-6 items)
- Section heading: "Communication Guidelines" — bold, medium size
- Bulleted list: communication principles (5-6 items)
- Section heading: "Day 1 Checklist" — bold, medium size
- Bulleted list: first-day tasks (6 items)
- Bullets use a small dot style (not dashes or custom markers)
- Content has horizontal padding of roughly 32-40px from the canvas edges

---

## Phase 1 — Canvas Context + State Toggle

**Goal:** Clicking the resource card in the side panel swaps the main content area from the macro form to an empty canvas container. Clicking close swaps it back.

### What to build

1. **CanvasContext** — a React context that both the side panel and main area can access:
   - State: `{ isOpen: boolean, activeResource: ResourceReference | null }`
   - Actions: `openCanvas(resource: ResourceReference)`, `closeCanvas()`
   - Wrap both the main content area and side panel with `CanvasProvider`

2. **ResourceReference type:**
   - `{ id: string, title: string, type: 'article' | 'macro' | 'trigger' }`

3. **Main area conditional rendering:**
   - When `isOpen` is false: render the existing macro form (current behavior)
   - When `isOpen` is true: render a placeholder canvas container (white background, full size) with a close button (✕) in the top-right corner
   - Close button calls `closeCanvas()`, which restores the macro form

4. **Wire the resource card:**
   - The existing "New Agent Onboarding" resource card's onClick calls `openCanvas({ id: '1', title: 'New Agent Onboarding', type: 'article' })`

### Components to create

- `CanvasContext.tsx` + `CanvasProvider` — shared state
- `ResourceReference` type in `types/resources.ts`
- Modifications to existing main area wrapper to conditionally render canvas vs. page content
- Modifications to existing `ResourceCard` to call `openCanvas` on click

### Acceptance criteria

- Clicking the resource card replaces the macro form with a white canvas placeholder
- The canvas placeholder shows the resource title and a working close button
- Clicking close restores the macro form
- Side panel is completely unaffected during the toggle
- No layout shift or flicker on transition

---

## Phase 2 — Canvas Toolbar

**Goal:** Build the sticky toolbar at the top of the canvas with formatting controls, Publish button, and close button.

### What to build

1. **Toolbar layout:**
   - Horizontal bar, full width of the canvas area
   - Light bottom border (1px, Garden neutral color)
   - Vertically centered icon buttons with consistent sizing

2. **Left group — formatting controls (visual only, non-functional):**
   - Heading button: displays "H" — toggles heading level (no-op for now)
   - Text style button: displays "AA" — for bold/italic/etc. (no-op)
   - Text color button: displays "A" with a colored underline bar — color picker (no-op)
   - List button: list/indent icon — toggle lists (no-op)
   - **Vertical divider** — thin line separating formatting from utility actions
   - Kebab menu: three vertical dots — overflow actions (no-op)
   - Magic wand / sparkle icon: AI action trigger (no-op)

3. **Right group — actions:**
   - "Publish" button: Garden `Button` component, primary variant, medium size
   - Close button (✕): Garden `IconButton` or styled close icon, calls `closeCanvas()`

4. **Sticky behavior:**
   - Toolbar stays pinned at the top of the canvas when content scrolls below

### Components to create

- `CanvasToolbar.tsx` — the full toolbar row
- Individual toolbar icon buttons (can be inline or extracted as needed)

### Acceptance criteria

- Toolbar renders with all controls matching the screenshot layout
- Left group has formatting icons, divider, kebab, and sparkle icon
- Right group has Publish and close buttons
- Publish button uses Garden primary styling
- Close button triggers `closeCanvas()`
- Toolbar sticks to the top on content scroll
- Formatting buttons are present but non-functional (no errors on click)
- Bottom border separates toolbar from content area

---

## Phase 3 — Article Content

**Goal:** Render the "New Agent Onboarding" article content inside the canvas with correct typography and structure.

### What to build

1. **Content container:**
   - Sits below the toolbar, fills remaining canvas height
   - Scrollable overflow (toolbar stays fixed, content scrolls)
   - Horizontal padding: ~32-40px
   - Content max-width: ~720px to keep prose readable (not strictly centered — left-aligned with padding)

2. **Article title:**
   - "New Agent Onboarding"
   - Large bold heading — Garden `XXL` or equivalent (~24-28px)
   - Margin below before body content begins

3. **Article body (HTML rendered):**
   - Intro paragraph
   - Bold section headings ("Your Role at a Glance", "Communication Guidelines", "Day 1 Checklist")
   - Bulleted lists under each section heading with small dot bullets
   - Standard paragraph spacing between sections

4. **Content data layer:**
   - `ResourceContent` type: `{ id, title, type, body: string, status: 'draft' | 'published', updatedAt }`
   - Mock fetch: `fetchResourceContent(id)` returns the article after a short simulated delay
   - Body stored as HTML string (matches Zendesk Help Center article storage)

5. **Loading state:**
   - Skeleton placeholder while content "loads": title skeleton bar + several body-line skeleton bars
   - Resolves into rendered content after mock delay (~300-500ms)

### Mock article content

```
Title: New Agent Onboarding

Body:
We're thrilled to have you on board. As a CX Agent, you are the voice of our
company — the first point of contact for customers who need help, answers, or
reassurance. Your work directly shapes how customers feel about us.

**Your Role at a Glance**
As a CX Agent, your core responsibilities are:
• Respond to customer inquiries via email, chat, and/or phone
• Resolve issues efficiently while maintaining a positive tone
• Escalate complex or sensitive cases to a Team Lead
• Log all interactions accurately in the support system
• Follow company policies and maintain customer confidentiality

**Communication Guidelines**
Every customer interaction should reflect these principles:
• Be empathetic — acknowledge the customer's frustration or concern first
• Be clear — use simple, jargon-free language
• Be concise — get to the solution quickly without over-explaining
• Stay professional — even if a customer is rude, remain calm and respectful
• Follow up — confirm the issue is resolved before closing a case

**Day 1 Checklist**
• Set up your work accounts and log into all tools
• Review the Customer Service Handbook (shared in your onboarding email)
• Complete IT security and data privacy training
• Shadow a senior agent for at least two live interactions
• Introduce yourself in the team chat channel
• Schedule a check-in with your Team Lead for end of week
```

### Components to create

- `CanvasContent.tsx` — scrollable body with title + HTML renderer
- `CanvasContentSkeleton.tsx` — loading skeleton
- `ResourceContent` type in `types/resources.ts`
- `fetchResourceContent.ts` in `mocks/`

### Acceptance criteria

- Article title is large and bold at the top of the content area
- Section headings are visually distinct (bold, slightly larger than body)
- Bulleted lists render with dot-style bullets and proper indentation
- Content scrolls; toolbar remains fixed above
- Skeleton appears briefly before content resolves
- Typography feels native to Zendesk Admin Center
- Content does not stretch full width on wide screens

---

## Phase 4 — Integration & Polish

**Goal:** Connect all pieces into a seamless end-to-end flow and polish transitions, states, and edge cases.

### What to build

1. **End-to-end flow verification:**
   - Resource card click → canvas opens with toolbar + skeleton → content loads → close button restores macro form
   - Resource card in chat shows a selected/active state while canvas is open (subtle border or background change)
   - Card deselects when canvas closes

2. **Transition animation:**
   - Canvas open: quick fade-in or slide-up of the canvas content (under 250ms, ease-out)
   - Canvas close: reverse (fade-out or slide-down)
   - No layout jump — the left nav and side panel should not shift at all

3. **Edge cases:**
   - Clicking the same resource card while canvas is already open: no-op (don't re-trigger)
   - Clicking a different resource card while canvas is open: swap content (show skeleton, load new resource)
   - Ensure no scroll position bleed between macro form and canvas

4. **Visual audit against Figma:**
   - Toolbar icon sizing and spacing
   - Content padding and max-width
   - Font sizes for title, section headings, body, and bullets
   - Button sizing (Publish)
   - Overall vertical rhythm

### Acceptance criteria

- Full flow works end-to-end with no broken or flickering states
- Resource card selected state syncs with canvas open/close
- Transitions feel smooth and intentional
- Re-clicking same card does not restart loading
- Clicking different card swaps content cleanly
- Visual output matches the Figma canvas screenshot

---

## Out of Scope (Future Phases)

- Inline editing (making toolbar controls functional)
- AI diff view (track-changes for AI edits)
- Bidirectional linking (chat ↔ canvas section highlighting)
- Multi-resource tabs in canvas
- Inline micro-actions (hover controls like "Simplify" on content blocks)
- Version history timeline
- Real API integration (replacing mocks with Zendesk APIs)

---

## File Structure (Proposed)

```
src/
  context/
    CanvasContext.tsx           # Shared state: open/close, active resource
  components/
    canvas/
      Canvas.tsx               # Shell: toolbar + content area
      CanvasToolbar.tsx         # Sticky toolbar with icons + Publish + close
      CanvasContent.tsx         # Scrollable article renderer
      CanvasContentSkeleton.tsx # Loading state
  types/
    resources.ts               # ResourceReference, ResourceContent
  mocks/
    resources.ts               # Sample resource card data
    fetchResourceContent.ts    # Mock fetch returning article HTML
```

Note: The side panel, chat, and resource card components already exist. This plan only adds new canvas components and a shared context. Modifications to existing components are limited to:
- Wrapping the app with `CanvasProvider`
- Adding `openCanvas()` call to the existing resource card's onClick
- Conditionally rendering canvas vs. macro form in the main area

---

## How to Use This Plan with Claude Code

Work through phases in order. Each phase prompt should:

1. Reference this file: `@PLAN-artifact-canvas.md`
2. Specify the phase number and name
3. Attach the canvas-open screenshot as visual reference
4. Ask for plan-mode review before execution

**Phase 1 prompt:**
> Read `@PLAN-artifact-canvas.md` — full build plan for the artifact canvas. Let's start with Phase 1: Canvas Context + State Toggle. The resource card in the side panel already exists and is clickable. I need a shared React context so clicking it swaps the main content area from the macro form to a canvas container. Closing the canvas restores the macro form. Use Zendesk Garden components. Show me your plan before writing code.

**Phase 2 prompt:**
> Continuing `@PLAN-artifact-canvas.md` — Phase 2: Canvas Toolbar. Here's the screenshot of what it should look like [attach screenshot]. Build the sticky toolbar at the top of the canvas with formatting icons on the left, Publish button and close on the right. Formatting buttons are visual only, non-functional. Show me your plan before writing code.

**Phase 3 prompt:**
> Continuing `@PLAN-artifact-canvas.md` — Phase 3: Article Content. Render the "New Agent Onboarding" article inside the canvas with the title, section headings, and bulleted lists matching the screenshot. Include a loading skeleton. Use mock data. Show me your plan before writing code.

**Phase 4 prompt:**
> Continuing `@PLAN-artifact-canvas.md` — Phase 4: Integration & Polish. Wire the full flow end-to-end: card click → canvas open → content load → close. Add transitions, selected state on the card, and do a visual audit against the Figma screenshot [attach]. Show me your plan before writing code.

After each phase, review the output and feed any corrections back into `CLAUDE.md`.
