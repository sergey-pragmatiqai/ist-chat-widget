# N8N Chat Options Documentation

This document provides comprehensive documentation for all available options in the N8N Chat widget, including all styling and configuration options.

## Table of Contents

1. [Core Chat Options](#core-chat-options)
2. [Theme Options](#theme-options)
3. [Color Customization](#color-customization)
4. [Layout & Spacing](#layout--spacing)
5. [Window Configuration](#window-configuration)
6. [Header Styling](#header-styling)
7. [Message Styling](#message-styling)
8. [Button Styling](#button-styling)
9. [Input Area Styling](#input-area-styling)
10. [Welcome Message Styling](#welcome-message-styling)
11. [Internationalization](#internationalization)
12. [Examples](#examples)

## Core Chat Options

### Required Options

| Option | Type | Description |
|--------|------|-------------|
| `webhookUrl` | `string` | **Required.** The webhook URL for handling chat messages |
| `i18n` | `Record<string, object>` | **Required.** Internationalization configuration |

### Optional Core Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `webhookConfig` | `object` | `{ method: 'POST', headers: {} }` | Webhook configuration |
| `webhookConfig.method` | `'GET' \| 'POST'` | `'POST'` | HTTP method for webhook requests |
| `webhookConfig.headers` | `Record<string, string>` | `{}` | Additional headers for webhook requests |
| `target` | `string \| Element` | `'#n8n-chat'` | DOM element or selector where chat will be mounted |
| `mode` | `'window' \| 'fullscreen'` | `'window'` | Display mode of the chat widget |
| `showWindowCloseButton` | `boolean` | `false` | Show close button in window mode |
| `showWelcomeScreen` | `boolean` | `false` | Show welcome screen before starting chat |
| `loadPreviousSession` | `boolean` | `true` | Load previous chat session from localStorage |
| `chatInputKey` | `string` | `'chatInput'` | Key name for input in webhook requests |
| `chatSessionKey` | `string` | `'sessionId'` | Key name for session ID in webhook requests |
| `defaultLanguage` | `string` | `'en'` | Default language for the chat |
| `initialMessages` | `string[]` | `[]` | Initial messages to display when chat starts |
| `metadata` | `Record<string, unknown>` | `{}` | Additional metadata to send with webhook requests |
| `messageComponents` | `Record<string, Component>` | `{}` | Custom Vue components for message types |
| `disabled` | `Ref<boolean>` | `undefined` | Reactive reference to disable/enable chat |
| `allowFileUploads` | `Ref<boolean> \| boolean` | `false` | Enable file upload functionality |
| `allowedFilesMimeTypes` | `Ref<string> \| string` | `undefined` | Allowed MIME types for file uploads |
| `elevenLabsAgentUrl` | `string` | `undefined` | URL for ElevenLabs agent integration |
| `showElevenLabsButton` | `boolean` | `false` | Show ElevenLabs voice button |
| `showPoweredBy` | `boolean` | `false` | Show "Powered by" footer |
| `welcomeMessage` | `object` | `undefined` | Welcome message configuration |
| `welcomeMessage.enabled` | `boolean` | `false` | Enable welcome message popup |
| `welcomeMessage.text` | `string` | `undefined` | Welcome message text |
| `welcomeMessage.icon` | `string` | `undefined` | Welcome message icon (emoji or image URL) |
| `headerIcon` | `string` | `undefined` | Header icon (emoji or image URL) |

## Theme Options

The `theme` option accepts a `ChatTheme` object with extensive styling options:

## Color Customization

### Base Colors

| Option | Type | Description |
|--------|------|-------------|
| `primaryColor` | `string` | Primary brand color (buttons, links, etc.) |
| `primaryColorShade50` | `string` | 50% shade of primary color (hover states) |
| `primaryColorShade100` | `string` | 100% shade of primary color (active states) |
| `secondaryColor` | `string` | Secondary brand color |
| `secondaryColorShade50` | `string` | 50% shade of secondary color |
| `whiteColor` | `string` | White color for backgrounds and text |
| `lightColor` | `string` | Light background color |
| `lightColorShade50` | `string` | 50% shade of light color |
| `lightColorShade100` | `string` | 100% shade of light color |
| `mediumColor` | `string` | Medium gray color |
| `darkColor` | `string` | Dark text color |
| `disabledColor` | `string` | Disabled state color |
| `typingColor` | `string` | Typing indicator color |

## Layout & Spacing

| Option | Type | Description |
|--------|------|-------------|
| `spacing` | `string` | Base spacing unit (e.g., `'1rem'`, `'16px'`) |
| `borderRadius` | `string` | Base border radius (e.g., `'4px'`, `'0.25rem'`) |
| `transitionDuration` | `string` | Animation duration (e.g., `'0.15s'`) |
| `fontFamily` | `string` | Font family for all text |

## Window Configuration

| Option | Type | Description |
|--------|------|-------------|
| `windowWidth` | `string` | Chat window width |
| `windowHeight` | `string` | Chat window height |
| `windowBottom` | `string` | Distance from bottom of screen |
| `windowRight` | `string` | Distance from right of screen |
| `windowZIndex` | `string` | Z-index of chat window |
| `windowBorder` | `string` | Window border style |
| `windowBorderRadius` | `string` | Window border radius |
| `windowMarginBottom` | `string` | Bottom margin of window |

## Header Styling

| Option | Type | Description |
|--------|------|-------------|
| `headerHeight` | `string` | Header height |
| `headerPadding` | `string` | Header padding |
| `headerBackground` | `string` | Header background color |
| `headerColor` | `string` | Header text color |
| `headerBorderTop` | `string` | Top border of header |
| `headerBorderBottom` | `string` | Bottom border of header |
| `headerBorderLeft` | `string` | Left border of header |
| `headerBorderRight` | `string` | Right border of header |
| `headingFontSize` | `string` | Main heading font size |
| `subtitleFontSize` | `string` | Subtitle font size |
| `subtitleLineHeight` | `string` | Subtitle line height |

### Header Icon

| Option | Type | Description |
|--------|------|-------------|
| `headerIconSize` | `string` | Header icon size |
| `headerIconMarginRight` | `string` | Right margin of header icon |
| `headerIconEmojiSize` | `string` | Emoji size in header icon |
| `headerIconBorderRadius` | `string` | Header icon border radius |
| `headerIconBackground` | `string` | Header icon background |
| `headerIconPadding` | `string` | Header icon padding |

## Message Styling

| Option | Type | Description |
|--------|------|-------------|
| `messageFontSize` | `string` | Message text font size |
| `messagePadding` | `string` | Message padding |
| `messageBorderRadius` | `string` | Message border radius |
| `messageLineHeight` | `string` | Message line height |
| `messageMarginBottom` | `string` | Bottom margin between messages |
| `botMessageBackground` | `string` | Bot message background color |
| `botMessageColor` | `string` | Bot message text color |
| `botMessageBorder` | `string` | Bot message border |
| `userMessageBackground` | `string` | User message background color |
| `userMessageColor` | `string` | User message text color |
| `userMessageBorder` | `string` | User message border |
| `messagePreBackground` | `string` | Code block background color |
| `messagesListPadding` | `string` | Messages list container padding |

## Button Styling

### Toggle Button (Chat Open/Close)

| Option | Type | Description |
|--------|------|-------------|
| `toggleSize` | `string` | Toggle button size |
| `toggleWidth` | `string` | Toggle button width |
| `toggleHeight` | `string` | Toggle button height |
| `toggleBorderRadius` | `string` | Toggle button border radius |
| `toggleBackground` | `string` | Toggle button background |
| `toggleHoverBackground` | `string` | Toggle button hover background |
| `toggleActiveBackground` | `string` | Toggle button active background |
| `toggleColor` | `string` | Toggle button text/icon color |

### General Button Styles

| Option | Type | Description |
|--------|------|-------------|
| `buttonColor` | `string` | General button text color |
| `buttonBackground` | `string` | General button background |
| `buttonPadding` | `string` | General button padding |
| `buttonBorderRadius` | `string` | General button border radius |
| `buttonHoverColor` | `string` | General button hover text color |
| `buttonHoverBackground` | `string` | General button hover background |

### Close Button

| Option | Type | Description |
|--------|------|-------------|
| `closeButtonSize` | `string` | Close button size |
| `closeButtonColor` | `string` | Close button color |
| `closeButtonBackground` | `string` | Close button background |
| `closeButtonColorHover` | `string` | Close button hover color |
| `closeButtonBackgroundHover` | `string` | Close button hover background |
| `closeButtonBorderRadius` | `string` | Close button border radius |
| `closeButtonPadding` | `string` | Close button padding |
| `closeButtonIconSize` | `string` | Close button icon size |
| `closeButtonPosition` | `string` | Close button position |
| `closeButtonTop` | `string` | Close button top position |
| `closeButtonRight` | `string` | Close button right position |
| `closeButtonBottom` | `string` | Close button bottom position |
| `closeButtonLeft` | `string` | Close button left position |
| `closeButtonZIndex` | `string` | Close button z-index |

### Send Button

| Option | Type | Description |
|--------|------|-------------|
| `sendButtonBackground` | `string` | Send button background |
| `sendButtonColor` | `string` | Send button color |
| `sendButtonBackgroundHover` | `string` | Send button hover background |
| `sendButtonColorHover` | `string` | Send button hover color |

### File Button

| Option | Type | Description |
|--------|------|-------------|
| `fileButtonBackground` | `string` | File button background |
| `fileButtonColor` | `string` | File button color |
| `fileButtonBackgroundHover` | `string` | File button hover background |
| `fileButtonColorHover` | `string` | File button hover color |
| `filesSpacing` | `string` | Spacing between file attachments |

### Voice Button

| Option | Type | Description |
|--------|------|-------------|
| `voiceButtonBackground` | `string` | Voice button background |
| `voiceButtonColor` | `string` | Voice button color |
| `voiceButtonBackgroundHover` | `string` | Voice button hover background |
| `voiceButtonColorHover` | `string` | Voice button hover color |

### ElevenLabs Button

| Option | Type | Description |
|--------|------|-------------|
| `elevenLabsButtonBackground` | `string` | ElevenLabs button background |
| `elevenLabsButtonColor` | `string` | ElevenLabs button color |
| `elevenLabsButtonBackgroundHover` | `string` | ElevenLabs button hover background |
| `elevenLabsButtonColorHover` | `string` | ElevenLabs button hover color |
| `elevenLabsButtonBackgroundDisabled` | `string` | ElevenLabs button disabled background |
| `elevenLabsButtonColorDisabled` | `string` | ElevenLabs button disabled color |
| `elevenLabsButtonBorderRadius` | `string` | ElevenLabs button border radius |
| `elevenLabsButtonFocusColor` | `string` | ElevenLabs button focus color |

## Input Area Styling

| Option | Type | Description |
|--------|------|-------------|
| `textareaHeight` | `string` | Input textarea height |
| `textareaMaxHeight` | `string` | Input textarea maximum height |
| `inputFontSize` | `string` | Input text font size |
| `inputBorder` | `string` | Input border style |
| `inputBorderRadius` | `string` | Input border radius |
| `inputPadding` | `string` | Input padding |
| `inputBackground` | `string` | Input background color |
| `inputTextColor` | `string` | Input text color |
| `inputLineHeight` | `string` | Input line height |
| `inputPlaceholderFontSize` | `string` | Placeholder text font size |
| `inputBorderActive` | `string` | Active input border style |
| `inputLeftPanelWidth` | `string` | Left panel width in input area |

## Welcome Message Styling

### Welcome Message Container

| Option | Type | Description |
|--------|------|-------------|
| `welcomeMessageBackground` | `string` | Welcome message background |
| `welcomeMessageColor` | `string` | Welcome message text color |
| `welcomeMessageBorder` | `string` | Welcome message border |
| `welcomeMessageBorderRadius` | `string` | Welcome message border radius |
| `welcomeMessagePadding` | `string` | Welcome message padding |
| `welcomeMessageFontSize` | `string` | Welcome message font size |
| `welcomeMessageFontFamily` | `string` | Welcome message font family |
| `welcomeMessageFontWeight` | `string` | Welcome message font weight |
| `welcomeMessageLineHeight` | `string` | Welcome message line height |
| `welcomeMessageMaxWidth` | `string` | Welcome message maximum width |
| `welcomeMessageMinWidth` | `string` | Welcome message minimum width |
| `welcomeMessageBoxShadow` | `string` | Welcome message box shadow |
| `welcomeMessageBoxShadowHover` | `string` | Welcome message hover box shadow |
| `welcomeMessageBorderHover` | `string` | Welcome message hover border |
| `welcomeMessageTransformHover` | `string` | Welcome message hover transform |
| `welcomeMessageTransition` | `string` | Welcome message transition |
| `welcomeMessageZIndex` | `string` | Welcome message z-index |
| `welcomeMessagePosition` | `string` | Welcome message position |
| `welcomeMessageBottom` | `string` | Welcome message bottom position |
| `welcomeMessageRight` | `string` | Welcome message right position |
| `welcomeMessageTop` | `string` | Welcome message top position |
| `welcomeMessageLeft` | `string` | Welcome message left position |

### Welcome Message Content Alignment

| Option | Type | Description |
|--------|------|-------------|
| `welcomeMessageAlignItems` | `string` | Welcome message content alignment (flexbox align-items) |
| `welcomeMessageJustifyContent` | `string` | Welcome message content justification (flexbox justify-content) |
| `welcomeMessageTextAlign` | `string` | Welcome message text alignment |

### Welcome Message Icon

| Option | Type | Description |
|--------|------|-------------|
| `welcomeMessageIconSize` | `string` | Welcome message icon size |
| `welcomeMessageIconGap` | `string` | Gap between icon and text |
| `welcomeMessageIconEmojiSize` | `string` | Emoji size in welcome message |
| `welcomeMessageIconBorderRadius` | `string` | Welcome message icon border radius |
| `welcomeMessageIconBackground` | `string` | Welcome message icon background |
| `welcomeMessageIconPadding` | `string` | Welcome message icon padding |

### Welcome Message Close Button

| Option | Type | Description |
|--------|------|-------------|
| `welcomeMessageCloseSize` | `string` | Welcome message close button size |
| `welcomeMessageCloseFontSize` | `string` | Welcome message close button font size |
| `welcomeMessageCloseColor` | `string` | Welcome message close button color |
| `welcomeMessageCloseBackground` | `string` | Welcome message close button background |
| `welcomeMessageCloseBackgroundHover` | `string` | Welcome message close button hover background |
| `welcomeMessageCloseColorHover` | `string` | Welcome message close button hover color |
| `welcomeMessageCloseBorderRadius` | `string` | Welcome message close button border radius |
| `welcomeMessageCloseTransition` | `string` | Welcome message close button transition |
| `welcomeMessageCloseFocusShadow` | `string` | Welcome message close button focus shadow |

### Welcome Message Mobile

| Option | Type | Description |
|--------|------|-------------|
| `welcomeMessageMobileMaxWidth` | `string` | Mobile welcome message max width |
| `welcomeMessageMobileIconSize` | `string` | Mobile welcome message icon size |
| `welcomeMessageMobileIconEmojiSize` | `string` | Mobile welcome message emoji size |
| `welcomeMessageMobileFontSize` | `string` | Mobile welcome message font size |
| `welcomeMessageMobileGap` | `string` | Mobile welcome message gap |

## Body and Footer

| Option | Type | Description |
|--------|------|-------------|
| `bodyBackground` | `string` | Chat body background color |
| `footerBackground` | `string` | Footer background color |
| `footerColor` | `string` | Footer text color |

## Custom CSS

| Option | Type | Description |
|--------|------|-------------|
| `customCSS` | `string` | Custom CSS to inject into the chat |

## Internationalization

The `i18n` option is required and should contain language objects with the following structure:

```typescript
i18n: {
  [languageCode: string]: {
    title: string;
    subtitle: string;
    footer: string;
    getStarted: string;
    inputPlaceholder: string;
    closeButtonTooltip: string;
    elevenLabsButtonTooltip?: string;
    [message: string]: string; // Additional custom messages
  }
}
```

### Required i18n Properties

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Main chat title |
| `subtitle` | `string` | Chat subtitle |
| `footer` | `string` | Footer text |
| `getStarted` | `string` | "Get Started" button text |
| `inputPlaceholder` | `string` | Input placeholder text |
| `closeButtonTooltip` | `string` | Close button tooltip |

### Optional i18n Properties

| Property | Type | Description |
|----------|------|-------------|
| `elevenLabsButtonTooltip` | `string` | ElevenLabs button tooltip |
| `[message: string]` | `string` | Custom message keys |

## Examples

### Basic Configuration

```javascript
createChat({
  webhookUrl: 'https://your-n8n-instance.com/webhook/your-webhook-id',
  mode: 'window',
  showWelcomeScreen: false,
  i18n: {
    en: {
      title: 'Welcome to our support!',
      subtitle: 'How can we help you today?',
      footer: '',
      getStarted: 'New Conversation',
      inputPlaceholder: 'Type your message...',
      closeButtonTooltip: 'Close chat'
    }
  }
});
```

### Advanced Theming

```javascript
createChat({
  webhookUrl: 'https://your-n8n-instance.com/webhook/your-webhook-id',
  mode: 'window',
  showWelcomeScreen: false,
  showElevenLabsButton: true,
  elevenLabsAgentUrl: 'https://elevenlabs.io/app/talk-to?agent_id=agent_id',
  showPoweredBy: false,
  showWindowCloseButton: true,
  theme: {
    // Brand Colors
    primaryColor: '#112351',
    primaryColorShade50: '#1a2d5f',
    primaryColorShade100: '#0f1f47',
    secondaryColor: '#20b69e',
    secondaryColorShade50: '#1ca08a',
    
    // Layout
    spacing: '1.2rem',
    borderRadius: '12px',
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    
    // Window
    windowWidth: '420px',
    windowHeight: '650px',
    windowBottom: '120px',
    windowRight: '32px',
    windowZIndex: '999',
    
    // Header
    headerBackground: '#112351',
    headerColor: '#ffffff',
    headingFontSize: '1.5rem',
    headerHeight: '70px',
    headerPadding: '1.2rem',
    
    // Header Icon
    headerIconSize: '50px',
    headerIconMarginRight: '10px',
    headerIconBorderRadius: '8px',
    headerIconPadding: '8px',
    
    // Messages
    messageFontSize: '16px',
    messagePadding: '1.2rem',
    messageBorderRadius: '10px',
    botMessageBackground: '#f8f9fa',
    userMessageBackground: '#112351',
    userMessageColor: '#ffffff',
    
    // Buttons
    toggleBackground: '#112351',
    toggleHoverBackground: '#1a2d5f',
    toggleSize: '70px',
    sendButtonBackground: '#ffffff',
    sendButtonColor: '#112351',
    sendButtonBackgroundHover: '#0f1f47',
    sendButtonColorHover: '#ffffff',
    
    // ElevenLabs Button
    elevenLabsButtonBackground: '#112351',
    elevenLabsButtonColor: '#ffffff',
    elevenLabsButtonBackgroundHover: '#0f1f47',
    elevenLabsButtonColorHover: '#ffffff',
    elevenLabsButtonBackgroundDisabled: '#9ca3af',
    elevenLabsButtonBorderRadius: '8px',
    elevenLabsButtonFocusColor: '#112351',
    
    // Close Button
    closeButtonColor: '#ffffff',
    closeButtonBorderRadius: '8px',
    closeButtonPadding: '6px',
    closeButtonIconSize: '18px',
    
    // Welcome Message
    welcomeMessageBackground: '#f8f9fa',
    welcomeMessageColor: '#112351',
    welcomeMessageBorder: '1px solid #112351',
    welcomeMessageBorderRadius: '16px',
    welcomeMessageFontSize: '15px',
    welcomeMessageIconSize: '60px',
    welcomeMessageIconGap: '16px',
    welcomeMessageAlignItems: 'center',
    welcomeMessageJustifyContent: 'flex-start',
    welcomeMessageTextAlign: 'left',
    
    // Custom CSS
    customCSS: `
      .chat-container {
        font-family: Georgia, 'Times New Roman', Times, serif !important;
      }
      .chat-header {
        font-family: Arial, Helvetica, sans-serif !important;
      }
    `
  },
  i18n: {
    en: {
      title: 'Welcome to our support!',
      subtitle: 'How can we help you today?',
      footer: '',
      getStarted: 'New Conversation',
      inputPlaceholder: 'Type your message...',
      closeButtonTooltip: 'Close chat',
      elevenLabsButtonTooltip: 'Open ElevenLabs Agent'
    }
  },
  welcomeMessage: {
    enabled: true,
    text: 'Hi! How may I help you?',
    icon: 'https://example.com/logo.png' // Can be emoji or image URL
  },
  headerIcon: 'https://example.com/header-icon.png', // Can be emoji or image URL
  initialMessages: [
    'Hello! How can I help you today?',
    'Feel free to ask any questions!'
  ]
});
```

This documentation covers all available options for customizing the Chat widget. Use these options to create a chat experience that matches your brand and requirements.
