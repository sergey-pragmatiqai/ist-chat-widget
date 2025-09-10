# N8N Chat Component

This is a standalone version of the n8n chat component extracted from the main n8n repository.

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Build all packages:
```bash
pnpm build
```

3. Start development server:
```bash
pnpm dev
```

## Packages

- `@n8n/chat` - The main chat component
- `@n8n/design-system` - UI components and design system
- `@n8n/composables` - Vue composables
- `@n8n/utils` - Utility functions
- Configuration packages for TypeScript, ESLint, Vitest, and Storybook

## Development

The chat component can be found in `packages/frontend/@n8n/chat/`. It includes:
- Vue components for the chat interface
- TypeScript types and interfaces
- Styling and themes
- Example workflows and resources

## Building

Run `pnpm build` to build all packages. The built files will be in each package's `dist/` directory.
