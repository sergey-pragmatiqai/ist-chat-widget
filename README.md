# n8n Chat Widget

A standalone, embeddable chat widget built with Vue.js and TypeScript. This is a custom chat implementation based on PragmatiqAI IST chat widget that provides a modern, responsive chat interface for web applications and n8n workflows.

## Features

- 🎨 **Customizable UI** - Fully customizable with CSS variables and themes
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🌐 **Multi-language Support** - Built-in internationalization support
- 📁 **File Upload Support** - Optional file upload capabilities
- 🔧 **Easy Integration** - Simple CDN or npm package integration
- ⚡ **TypeScript Support** - Full TypeScript support with type definitions
- 🎯 **Two Display Modes** - Windowed and fullscreen modes
- 🔌 **API Integration** - Flexible API integration for custom backends
- 💬 **Real-time Messaging** - Support for real-time chat functionality

## Quick Start

### Installation

#### Option 1: NPM Package (Recommended)
```bash
npm install @pragmatiqai/ist-chat-widget
```

#### Option 2: CDN
```html
<link href="https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/style.css" rel="stylesheet" />
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/chat.bundle.es.js';
  
  createChat({
    webhookUrl: 'YOUR_WEBHOOK_URL'
  });
</script>
```

#### Option 3: Development Setup
1. **Install dependencies:**
```bash
pnpm install
```

2. **Build all packages:**
```bash
pnpm build
```

3. **Start development server:**
```bash
pnpm dev
```


## Configuration Options

The `createChat` function accepts the following options:

```ts
createChat({
  webhookUrl: 'YOUR_WEBHOOK_URL',           // Required: Your n8n webhook URL
  webhookConfig: {                          // Optional: HTTP config
    method: 'POST',
    headers: {}
  },
  target: '#n8n-chat',                      // Optional: CSS selector
  mode: 'window',                           // Optional: 'window' | 'fullscreen'
  loadPreviousSession: true,                // Optional: Load chat history
  metadata: {},                             // Optional: Additional metadata
  showWelcomeScreen: false,                 // Optional: Show welcome screen
  defaultLanguage: 'en',                    // Optional: Default language
  initialMessages: [                        // Optional: Initial messages
    'Hi there! 👋',
    'My name is Nathan. How can I assist you today?'
  ],
  allowFileUploads: false,                  // Optional: Enable file uploads
  allowedFilesMimeTypes: '',                // Optional: Allowed file types
  theme: {                                  // Optional: Custom theme configuration
    primaryColor: '#112351',
    secondaryColor: '#20b69e',
    windowWidth: '420px',
    windowHeight: '650px',
    // ... more theme options available
  },
  i18n: {                                   // Optional: Internationalization
    en: {
      title: 'Hi there! 👋',
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: '',
      getStarted: 'New Conversation',
      inputPlaceholder: 'Type your question..',
    },
  },
});
```

## Customization

The chat component offers comprehensive customization through the `ChatTheme` type, allowing you to customize colors, layout, typography, and component-specific styling.

### Theme Configuration

You can customize the chat appearance by passing a `theme` object to the `createChat` function:

```ts
createChat({
  webhookUrl: 'YOUR_WEBHOOK_URL',
  theme: {
    // Base Colors
    primaryColor: '#112351',
    secondaryColor: '#20b69e',
    lightColor: '#f5f5f5',
    darkColor: '#112351',
    
    // Layout Settings
    borderRadius: '12px',
    spacing: '1.2rem',
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    
    // Window Dimensions
    windowWidth: '420px',
    windowHeight: '650px',
    
    // Header Styles
    headerBackground: '#112351',
    headerColor: '#ffffff',
    headingFontSize: '2em',
    
    // Message Styles
    messageFontSize: '16px',
    botMessageBackground: '#ffffff',
    botMessageColor: '#112351',
    userMessageBackground: '#20b69e',
    userMessageColor: '#ffffff',
    
    // Button Styles
    toggleBackground: '#112351',
    toggleHoverBackground: '#1a2d5f',
    sendButtonBackground: '#ffffff',
    sendButtonColor: '#112351',
    
    // Welcome Message
    welcomeMessageBackground: '#f8f9fa',
    welcomeMessageColor: '#112351',
    welcomeMessageBorder: '1px solid #112351',
    
    // Custom CSS (for advanced styling)
    customCSS: `
      .my-custom-class {
        /* Your custom styles */
      }
    `
  }
});
```

### Available Theme Properties

The `ChatTheme` type includes over 100 customizable properties organized into categories:

- **Base Colors**: Primary, secondary, light, dark, and accent colors
- **Layout Settings**: Spacing, border radius, transitions, and typography
- **Window Dimensions**: Width, height, positioning, and z-index
- **Header Styles**: Background, text, borders, and icon customization
- **Message Styles**: Font size, colors, padding, and layout for bot/user messages
- **Button Styles**: Toggle, send, close, file, voice, and ElevenLabs buttons
- **Welcome Message**: Complete styling for the welcome message component
- **Custom CSS**: Raw CSS injection for advanced customization

### CSS Variables (Legacy)

The component also supports CSS variables for basic customization:

```css
:root {
  --chat--color-primary: #e74266;
  --chat--color-secondary: #20b69e;
  --chat--window--width: 400px;
  --chat--window--height: 600px;
  /* ... more variables available */
}
```

## Published Package

This project builds and publishes the `@pragmatiqai/ist-chat-widget` npm package:

- **Package Name**: `@pragmatiqai/ist-chat-widget`
- **NPM**: [npm package](https://www.npmjs.com/package/@pragmatiqai/ist-chat-widget)
- **CDN**: Available via jsdelivr CDN
- **Repository**: [GitHub](https://github.com/sergey-pragmatiqai/ist-chat-widget)

### CDN Links

- **Latest Version**: `https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/`
- **UMD Bundle**: `https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/chat.umd.js`
- **ES Module**: `https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/chat.es.js`
- **CSS Styles**: `https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/style.css`

## Project Structure

```
packages/
└── frontend/
    └── @n8n/
        └── chat/                    # Main chat component (published to npm)
            ├── src/
            │   ├── components/      # Vue components
            │   ├── composables/     # Vue composables
            │   ├── types/          # TypeScript types
            │   ├── utils/          # Utility functions
            │   └── api/            # API layer
            ├── dist/               # Built files (published to npm)
            └── resources/          # Example assets and configurations
```

## Development

### Prerequisites

- Node.js >= 22.15
- pnpm >= 10.2.1

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Run linting
- `pnpm test` - Run tests
- `pnpm format` - Format code
- `pnpm clean` - Clean build artifacts

### Development Workflow

1. **Clone the repository:**
```bash
git clone <repository-url>
cd n8n-chat
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Start development:**
```bash
pnpm dev
```

4. **Build for production:**
```bash
pnpm build
```

The main chat component is located in `packages/frontend/@n8n/chat/` and includes:
- Vue 3 components with TypeScript
- Comprehensive type definitions
- SCSS styling with CSS variables
- Storybook stories for component development
- Vitest test suite
- Example configurations and resources

## Building

Run `pnpm build` to build all packages. The built files will be available in each package's `dist/` directory and can be used for production deployments.

## Publishing

To publish the chat widget to npm:

1. **Navigate to the chat package directory:**
```bash
cd packages/frontend/@n8n/chat
```

2. **Login to npm (if not already logged in):**
```bash
npm login
```

3. **Build the package:**
```bash
pnpm run build
```

4. **Publish to npm:**
```bash
# Publish current version
pnpm run publish:npm

# Or publish with version bump
pnpm run publish:patch    # 1.0.0 → 1.0.1
pnpm run publish:minor    # 1.0.0 → 1.1.0  
pnpm run publish:major    # 1.0.0 → 2.0.0
```

The package will be available at:
- **NPM**: `https://www.npmjs.com/package/@pragmatiqai/ist-chat-widget`
- **CDN**: `https://cdn.jsdelivr.net/npm/@pragmatiqai/ist-chat-widget@latest/dist/`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.