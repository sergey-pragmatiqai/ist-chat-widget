import type { ChatTheme } from '../types/options';

/**
 * Applies theme configuration by injecting CSS variables and styles
 */
export function applyTheme(theme: ChatTheme): void {
	if (!theme) return;

	// Create CSS variables from theme
	const cssVariables = generateCSSVariables(theme);

	// Apply CSS variables to root
	if (cssVariables) {
		applyCSSVariables(cssVariables);
	}

	// Apply custom CSS if provided
	if (theme.customCSS) {
		applyCustomCSS(theme.customCSS);
	}
}

/**
 * Generate CSS variables from theme configuration - Complete mapping from constants.ts
 */
function generateCSSVariables(theme: ChatTheme): Record<string, string> {
	const variables: Record<string, string> = {};

	// Base Colors
	if (theme.primaryColor) variables['--chat--color-primary'] = theme.primaryColor;
	if (theme.primaryColorShade50)
		variables['--chat--color-primary-shade-50'] = theme.primaryColorShade50;
	if (theme.primaryColorShade100)
		variables['--chat--color-primary-shade-100'] = theme.primaryColorShade100;
	if (theme.secondaryColor) variables['--chat--color-secondary'] = theme.secondaryColor;
	if (theme.secondaryColorShade50)
		variables['--chat--color-secondary-shade-50'] = theme.secondaryColorShade50;
	if (theme.whiteColor) variables['--chat--color-white'] = theme.whiteColor;
	if (theme.lightColor) variables['--chat--color-light'] = theme.lightColor;
	if (theme.lightColorShade50) variables['--chat--color-light-shade-50'] = theme.lightColorShade50;
	if (theme.lightColorShade100)
		variables['--chat--color-light-shade-100'] = theme.lightColorShade100;
	if (theme.mediumColor) variables['--chat--color-medium'] = theme.mediumColor;
	if (theme.darkColor) variables['--chat--color-dark'] = theme.darkColor;
	if (theme.disabledColor) variables['--chat--color-disabled'] = theme.disabledColor;
	if (theme.typingColor) variables['--chat--color-typing'] = theme.typingColor;


	// Layout Settings
	if (theme.spacing) variables['--chat--spacing'] = theme.spacing;
	if (theme.borderRadius) variables['--chat--border-radius'] = theme.borderRadius;
	if (theme.transitionDuration) variables['--chat--transition-duration'] = theme.transitionDuration;
	if (theme.fontFamily) variables['--chat--font-family'] = theme.fontFamily;

	// Window Dimensions
	if (theme.windowWidth) variables['--chat--window--width'] = theme.windowWidth;
	if (theme.windowHeight) variables['--chat--window--height'] = theme.windowHeight;
	if (theme.windowBottom) variables['--chat--window--bottom'] = theme.windowBottom;
	if (theme.windowRight) variables['--chat--window--right'] = theme.windowRight;
	if (theme.windowZIndex) variables['--chat--window--z-index'] = theme.windowZIndex;
	if (theme.windowBorder) variables['--chat--window--border'] = theme.windowBorder;
	if (theme.windowBorderRadius)
		variables['--chat--window--border-radius'] = theme.windowBorderRadius;
	if (theme.windowMarginBottom)
		variables['--chat--window--margin-bottom'] = theme.windowMarginBottom;

	// Header Styles
	if (theme.headerHeight) variables['--chat--header-height'] = theme.headerHeight;
	if (theme.headerPadding) variables['--chat--header--padding'] = theme.headerPadding;
	if (theme.headerBackground) variables['--chat--header--background'] = theme.headerBackground;
	if (theme.headerColor) variables['--chat--header--color'] = theme.headerColor;
	if (theme.headerBorderTop) variables['--chat--header--border-top'] = theme.headerBorderTop;
	if (theme.headerBorderBottom)
		variables['--chat--header--border-bottom'] = theme.headerBorderBottom;
	if (theme.headerBorderLeft) variables['--chat--header--border-left'] = theme.headerBorderLeft;
	if (theme.headerBorderRight) variables['--chat--header--border-right'] = theme.headerBorderRight;
	if (theme.headingFontSize) variables['--chat--heading--font-size'] = theme.headingFontSize;
	if (theme.subtitleFontSize) variables['--chat--subtitle--font-size'] = theme.subtitleFontSize;
	if (theme.subtitleLineHeight)
		variables['--chat--subtitle--line-height'] = theme.subtitleLineHeight;

	// Message Styles
	if (theme.messageFontSize) variables['--chat--message--font-size'] = theme.messageFontSize;
	if (theme.messagePadding) variables['--chat--message--padding'] = theme.messagePadding;
	if (theme.messageBorderRadius)
		variables['--chat--message--border-radius'] = theme.messageBorderRadius;
	if (theme.messageLineHeight) variables['--chat--message-line-height'] = theme.messageLineHeight;
	if (theme.messageMarginBottom)
		variables['--chat--message--margin-bottom'] = theme.messageMarginBottom;
	if (theme.botMessageBackground)
		variables['--chat--message--bot--background'] = theme.botMessageBackground;
	if (theme.botMessageColor) variables['--chat--message--bot--color'] = theme.botMessageColor;
	if (theme.botMessageBorder) variables['--chat--message--bot--border'] = theme.botMessageBorder;
	if (theme.userMessageBackground)
		variables['--chat--message--user--background'] = theme.userMessageBackground;
	if (theme.userMessageColor) variables['--chat--message--user--color'] = theme.userMessageColor;
	if (theme.userMessageBorder) variables['--chat--message--user--border'] = theme.userMessageBorder;
	if (theme.messagePreBackground)
		variables['--chat--message--pre--background'] = theme.messagePreBackground;
	if (theme.messagesListPadding)
		variables['--chat--messages-list--padding'] = theme.messagesListPadding;

	// Toggle Button
	if (theme.toggleSize) variables['--chat--toggle--size'] = theme.toggleSize;
	if (theme.toggleWidth) variables['--chat--toggle--width'] = theme.toggleWidth;
	if (theme.toggleHeight) variables['--chat--toggle--height'] = theme.toggleHeight;
	if (theme.toggleBorderRadius)
		variables['--chat--toggle--border-radius'] = theme.toggleBorderRadius;
	if (theme.toggleBackground) variables['--chat--toggle--background'] = theme.toggleBackground;
	if (theme.toggleHoverBackground)
		variables['--chat--toggle--hover--background'] = theme.toggleHoverBackground;
	if (theme.toggleActiveBackground)
		variables['--chat--toggle--active--background'] = theme.toggleActiveBackground;
	if (theme.toggleColor) variables['--chat--toggle--color'] = theme.toggleColor;


	// Input Area
	if (theme.textareaHeight) variables['--chat--textarea--height'] = theme.textareaHeight;
	if (theme.textareaMaxHeight) variables['--chat--textarea--max-height'] = theme.textareaMaxHeight;
	if (theme.inputFontSize) variables['--chat--input--font-size'] = theme.inputFontSize;
	if (theme.inputBorder) variables['--chat--input--border'] = theme.inputBorder;
	if (theme.inputBorderRadius) variables['--chat--input--border-radius'] = theme.inputBorderRadius;
	if (theme.inputPadding) variables['--chat--input--padding'] = theme.inputPadding;
	if (theme.inputBackground) variables['--chat--input--background'] = theme.inputBackground;
	if (theme.inputTextColor) variables['--chat--input--text-color'] = theme.inputTextColor;
	if (theme.inputLineHeight) variables['--chat--input--line-height'] = theme.inputLineHeight;
	if (theme.inputPlaceholderFontSize)
		variables['--chat--input--placeholder--font-size'] = theme.inputPlaceholderFontSize;
	if (theme.inputBorderActive) variables['--chat--input--border-active'] = theme.inputBorderActive;
	if (theme.inputLeftPanelWidth)
		variables['--chat--input--left--panel--width'] = theme.inputLeftPanelWidth;

	// General Button Styles
	if (theme.buttonColor) variables['--chat--button--color'] = theme.buttonColor;
	if (theme.buttonBackground) variables['--chat--button--background'] = theme.buttonBackground;
	if (theme.buttonPadding) variables['--chat--button--padding'] = theme.buttonPadding;
	if (theme.buttonBorderRadius)
		variables['--chat--button--border-radius'] = theme.buttonBorderRadius;
	if (theme.buttonHoverColor) variables['--chat--button--hover--color'] = theme.buttonHoverColor;
	if (theme.buttonHoverBackground)
		variables['--chat--button--hover--background'] = theme.buttonHoverBackground;

	// Close Button Specific
	if (theme.closeButtonSize) variables['--chat--close--button--size'] = theme.closeButtonSize;
	if (theme.closeButtonColor) variables['--chat--close--button--color'] = theme.closeButtonColor;
	if (theme.closeButtonBackground)
		variables['--chat--close--button--background'] = theme.closeButtonBackground;
	if (theme.closeButtonColorHover)
		variables['--chat--close--button--color-hover'] = theme.closeButtonColorHover;
	if (theme.closeButtonBackgroundHover)
		variables['--chat--close--button--background-hover'] = theme.closeButtonBackgroundHover;
	if (theme.closeButtonBorderRadius)
		variables['--chat--close--button--border-radius'] = theme.closeButtonBorderRadius;
	if (theme.closeButtonPadding)
		variables['--chat--close--button--padding'] = theme.closeButtonPadding;
	if (theme.closeButtonIconSize)
		variables['--chat--close--button--icon-size'] = theme.closeButtonIconSize;
	if (theme.closeButtonPosition)
		variables['--chat--close--button--position'] = theme.closeButtonPosition;
	if (theme.closeButtonTop) variables['--chat--close--button--top'] = theme.closeButtonTop;
	if (theme.closeButtonRight) variables['--chat--close--button--right'] = theme.closeButtonRight;
	if (theme.closeButtonBottom) variables['--chat--close--button--bottom'] = theme.closeButtonBottom;
	if (theme.closeButtonLeft) variables['--chat--close--button--left'] = theme.closeButtonLeft;
	if (theme.closeButtonZIndex) variables['--chat--close--button--z-index'] = theme.closeButtonZIndex;

	// Send Button Specific
	if (theme.sendButtonBackground)
		variables['--chat--input--send--button--background'] = theme.sendButtonBackground;
	if (theme.sendButtonColor)
		variables['--chat--input--send--button--color'] = theme.sendButtonColor;
	if (theme.sendButtonBackgroundHover)
		variables['--chat--input--send--button--background-hover'] = theme.sendButtonBackgroundHover;
	if (theme.sendButtonColorHover)
		variables['--chat--input--send--button--color-hover'] = theme.sendButtonColorHover;


	// File Button Specific
	if (theme.fileButtonBackground)
		variables['--chat--input--file--button--background'] = theme.fileButtonBackground;
	if (theme.fileButtonColor)
		variables['--chat--input--file--button--color'] = theme.fileButtonColor;
	if (theme.fileButtonBackgroundHover)
		variables['--chat--input--file--button--background-hover'] = theme.fileButtonBackgroundHover;
	if (theme.fileButtonColorHover)
		variables['--chat--input--file--button--color-hover'] = theme.fileButtonColorHover;
	if (theme.filesSpacing) variables['--chat--files-spacing'] = theme.filesSpacing;

	// Voice Recording Button
	if (theme.voiceButtonBackground)
		variables['--chat--input--voice--button--background'] = theme.voiceButtonBackground;
	if (theme.voiceButtonColor)
		variables['--chat--input--voice--button--color'] = theme.voiceButtonColor;
	if (theme.voiceButtonBackgroundHover)
		variables['--chat--input--voice--button--background-hover'] = theme.voiceButtonBackgroundHover;
	if (theme.voiceButtonColorHover)
		variables['--chat--input--voice--button--color-hover'] = theme.voiceButtonColorHover;

	// ElevenLabs Button
	if (theme.elevenLabsButtonBackground)
		variables['--chat--input--elevenlabs--button--background'] = theme.elevenLabsButtonBackground;
	if (theme.elevenLabsButtonColor)
		variables['--chat--input--elevenlabs--button--color'] = theme.elevenLabsButtonColor;
	if (theme.elevenLabsButtonBackgroundHover)
		variables['--chat--input--elevenlabs--button--background-hover'] = theme.elevenLabsButtonBackgroundHover;
	if (theme.elevenLabsButtonColorHover)
		variables['--chat--input--elevenlabs--button--color-hover'] = theme.elevenLabsButtonColorHover;
	if (theme.elevenLabsButtonBackgroundDisabled)
		variables['--chat--input--elevenlabs--button--background-disabled'] = theme.elevenLabsButtonBackgroundDisabled;
	if (theme.elevenLabsButtonColorDisabled)
		variables['--chat--input--elevenlabs--button--color-disabled'] = theme.elevenLabsButtonColorDisabled;
	if (theme.elevenLabsButtonBorderRadius)
		variables['--chat--input--elevenlabs--button--border-radius'] = theme.elevenLabsButtonBorderRadius;
	if (theme.elevenLabsButtonFocusColor)
		variables['--chat--input--elevenlabs--button--focus-color'] = theme.elevenLabsButtonFocusColor;

	// Body and Footer
	if (theme.bodyBackground) variables['--chat--body--background'] = theme.bodyBackground;
	if (theme.footerBackground) variables['--chat--footer--background'] = theme.footerBackground;
	if (theme.footerColor) variables['--chat--footer--color'] = theme.footerColor;

	// Welcome Message
	if (theme.welcomeMessageBackground)
		variables['--chat--welcome-message--background'] = theme.welcomeMessageBackground;
	if (theme.welcomeMessageColor)
		variables['--chat--welcome-message--color'] = theme.welcomeMessageColor;
	if (theme.welcomeMessageBorder)
		variables['--chat--welcome-message--border'] = theme.welcomeMessageBorder;
	if (theme.welcomeMessageBorderRadius)
		variables['--chat--welcome-message--border-radius'] = theme.welcomeMessageBorderRadius;
	if (theme.welcomeMessagePadding)
		variables['--chat--welcome-message--padding'] = theme.welcomeMessagePadding;
	if (theme.welcomeMessageFontSize)
		variables['--chat--welcome-message--font-size'] = theme.welcomeMessageFontSize;
	if (theme.welcomeMessageFontFamily)
		variables['--chat--welcome-message--font-family'] = theme.welcomeMessageFontFamily;
	if (theme.welcomeMessageFontWeight)
		variables['--chat--welcome-message--font-weight'] = theme.welcomeMessageFontWeight;
	if (theme.welcomeMessageLineHeight)
		variables['--chat--welcome-message--line-height'] = theme.welcomeMessageLineHeight;
	if (theme.welcomeMessageMaxWidth)
		variables['--chat--welcome-message--max-width'] = theme.welcomeMessageMaxWidth;
	if (theme.welcomeMessageMinWidth)
		variables['--chat--welcome-message--min-width'] = theme.welcomeMessageMinWidth;
	if (theme.welcomeMessageBoxShadow)
		variables['--chat--welcome-message--box-shadow'] = theme.welcomeMessageBoxShadow;
	if (theme.welcomeMessageBoxShadowHover)
		variables['--chat--welcome-message--box-shadow-hover'] = theme.welcomeMessageBoxShadowHover;
	if (theme.welcomeMessageBorderHover)
		variables['--chat--welcome-message--border-hover'] = theme.welcomeMessageBorderHover;
	if (theme.welcomeMessageTransformHover)
		variables['--chat--welcome-message--transform-hover'] = theme.welcomeMessageTransformHover;
	if (theme.welcomeMessageTransition)
		variables['--chat--welcome-message--transition'] = theme.welcomeMessageTransition;
	if (theme.welcomeMessageZIndex)
		variables['--chat--welcome-message--z-index'] = theme.welcomeMessageZIndex;
	if (theme.welcomeMessagePosition)
		variables['--chat--welcome-message--position'] = theme.welcomeMessagePosition;
	if (theme.welcomeMessageBottom)
		variables['--chat--welcome-message--bottom'] = theme.welcomeMessageBottom;
	if (theme.welcomeMessageRight)
		variables['--chat--welcome-message--right'] = theme.welcomeMessageRight;
	if (theme.welcomeMessageTop)
		variables['--chat--welcome-message--top'] = theme.welcomeMessageTop;
	if (theme.welcomeMessageLeft)
		variables['--chat--welcome-message--left'] = theme.welcomeMessageLeft;

	// Welcome Message Icon
	if (theme.welcomeMessageIconSize)
		variables['--chat--welcome-message--icon--size'] = theme.welcomeMessageIconSize;
	if (theme.welcomeMessageIconGap)
		variables['--chat--welcome-message--icon--gap'] = theme.welcomeMessageIconGap;
	if (theme.welcomeMessageIconEmojiSize)
		variables['--chat--welcome-message--icon--emoji-size'] = theme.welcomeMessageIconEmojiSize;
	if (theme.welcomeMessageIconBorderRadius)
		variables['--chat--welcome-message--icon--border-radius'] = theme.welcomeMessageIconBorderRadius;
	if (theme.welcomeMessageIconBackground)
		variables['--chat--welcome-message--icon--background'] = theme.welcomeMessageIconBackground;
	if (theme.welcomeMessageIconPadding)
		variables['--chat--welcome-message--icon--padding'] = theme.welcomeMessageIconPadding;

	// Welcome Message Close Button
	if (theme.welcomeMessageCloseSize)
		variables['--chat--welcome-message--close--size'] = theme.welcomeMessageCloseSize;
	if (theme.welcomeMessageCloseFontSize)
		variables['--chat--welcome-message--close--font-size'] = theme.welcomeMessageCloseFontSize;
	if (theme.welcomeMessageCloseColor)
		variables['--chat--welcome-message--close--color'] = theme.welcomeMessageCloseColor;
	if (theme.welcomeMessageCloseBackground)
		variables['--chat--welcome-message--close--background'] = theme.welcomeMessageCloseBackground;
	if (theme.welcomeMessageCloseBackgroundHover)
		variables['--chat--welcome-message--close--background-hover'] = theme.welcomeMessageCloseBackgroundHover;
	if (theme.welcomeMessageCloseColorHover)
		variables['--chat--welcome-message--close--color-hover'] = theme.welcomeMessageCloseColorHover;
	if (theme.welcomeMessageCloseBorderRadius)
		variables['--chat--welcome-message--close--border-radius'] = theme.welcomeMessageCloseBorderRadius;
	if (theme.welcomeMessageCloseTransition)
		variables['--chat--welcome-message--close--transition'] = theme.welcomeMessageCloseTransition;
	if (theme.welcomeMessageCloseFocusShadow)
		variables['--chat--welcome-message--close--focus-shadow'] = theme.welcomeMessageCloseFocusShadow;

	// Welcome Message Mobile
	if (theme.welcomeMessageMobileMaxWidth)
		variables['--chat--welcome-message--mobile--max-width'] = theme.welcomeMessageMobileMaxWidth;
	if (theme.welcomeMessageMobileIconSize)
		variables['--chat--welcome-message--mobile--icon-size'] = theme.welcomeMessageMobileIconSize;
	if (theme.welcomeMessageMobileIconEmojiSize)
		variables['--chat--welcome-message--mobile--icon-emoji-size'] = theme.welcomeMessageMobileIconEmojiSize;
	if (theme.welcomeMessageMobileFontSize)
		variables['--chat--welcome-message--mobile--font-size'] = theme.welcomeMessageMobileFontSize;
	if (theme.welcomeMessageMobileGap)
		variables['--chat--welcome-message--mobile--gap'] = theme.welcomeMessageMobileGap;

	// Header Icon
	if (theme.headerIconSize)
		variables['--chat--header--icon--size'] = theme.headerIconSize;
	if (theme.headerIconMarginRight)
		variables['--chat--header--icon--margin-right'] = theme.headerIconMarginRight;
	if (theme.headerIconEmojiSize)
		variables['--chat--header--icon--emoji-size'] = theme.headerIconEmojiSize;
	if (theme.headerIconBorderRadius)
		variables['--chat--header--icon--border-radius'] = theme.headerIconBorderRadius;
	if (theme.headerIconBackground)
		variables['--chat--header--icon--background'] = theme.headerIconBackground;
	if (theme.headerIconPadding)
		variables['--chat--header--icon--padding'] = theme.headerIconPadding;

	return variables;
}

/**
 * Apply CSS variables to the document root
 */
function applyCSSVariables(variables: Record<string, string>): void {
	const root = document.documentElement;

	Object.entries(variables).forEach(([property, value]) => {
		root.style.setProperty(property, value);
	});
}

/**
 * Apply custom CSS styles
 */
function applyCustomCSS(customCSS: string): void {
	const styleId = 'n8n-chat-theme';

	// Remove existing theme styles
	const existingStyle = document.getElementById(styleId);
	if (existingStyle) {
		existingStyle.remove();
	}

	// Create new style element
	const styleElement = document.createElement('style');
	styleElement.id = styleId;
	styleElement.textContent = customCSS;

	// Append to document head
	document.head.appendChild(styleElement);
}

/**
 * Apply font families from theme
 */
export function applyFonts(theme: ChatTheme): void {
	if (!theme.fontFamily) return;

	let fontCSS = '';

	if (theme.fontFamily) {
		fontCSS += `
			.n8n-chat,
			.n8n-chat .chat-message,
			.n8n-chat .chat-input,
			.n8n-chat textarea,
			.n8n-chat button {
				font-family: ${theme.fontFamily} !important;
			}
		`;
	}

	if (fontCSS) {
		const styleId = 'n8n-chat-fonts';
		const existingStyle = document.getElementById(styleId);
		if (existingStyle) {
			existingStyle.remove();
		}

		const styleElement = document.createElement('style');
		styleElement.id = styleId;
		styleElement.textContent = fontCSS;
		document.head.appendChild(styleElement);
	}
}
