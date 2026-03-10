# CLAUDE.md

I'm a designer with limited coding experience, so please explain any technical decisions clearly and build things in incremental steps I can follow and verify.

## When implementing designs:
- Match designs pixel-perfectly — spacing, colors, typography, border radii, and layout
- Build incrementally: start with the overall layout/structure, then add one section at a time so I can review as we go
- Use semantic HTML and clean, well-commented CSS so I can understand and modify it later
- After each step, briefly explain what you built and why, so I can learn as we go
- If anything in the design is ambiguous, ask me before guessing
- Flag any spots where responsive behavior isn't obvious from the static design so we can decide together

## Design System
- Always use components from the [Zendesk Garden](https://garden.zendesk.com/components) design system instead of writing custom styles
- Always follow UX patterns from [Garden Patterns](https://garden.zendesk.com/patterns) instead of writing custom interaction JavaScript and styles
- Garden uses individual scoped packages — import from packages like `@zendeskgarden/react-buttons`, `@zendeskgarden/react-forms`, `@zendeskgarden/react-modals`, etc.
- All Garden React components require `@zendeskgarden/react-theming` and the `<ThemeProvider>` wrapper at the app root
- Reference the [Storybook](https://zendeskgarden.github.io/react-components/) for live examples and the [GitHub repo](https://github.com/zendeskgarden/react-components) for full API docs
- Do NOT create custom CSS for things that already have a Garden component (buttons, inputs, cards, modals, dropdowns, etc.)

## When implementing phased plans:
- Always complete one phase at a time and confirm it renders before starting the next.