import type { Component, Ref } from 'vue';

export interface ChatTheme {
	// Base Colors
	primaryColor?: string;
	primaryColorShade50?: string;
	primaryColorShade100?: string;
	secondaryColor?: string;
	secondaryColorShade50?: string;
	whiteColor?: string;
	lightColor?: string;
	lightColorShade50?: string;
	lightColorShade100?: string;
	mediumColor?: string;
	darkColor?: string;
	disabledColor?: string;
	typingColor?: string;
	
	// Layout Settings
	spacing?: string;
	borderRadius?: string;
	transitionDuration?: string;
	fontFamily?: string;
	
	// Window Dimensions
	windowWidth?: string;
	windowHeight?: string;
	windowBottom?: string;
	windowRight?: string;
	windowZIndex?: string;
	windowBorder?: string;
	windowBorderRadius?: string;
	windowMarginBottom?: string;
	
	// Header Styles
	headerHeight?: string;
	headerPadding?: string;
	headerBackground?: string;
	headerColor?: string;
	headerBorderTop?: string;
	headerBorderBottom?: string;
	headerBorderLeft?: string;
	headerBorderRight?: string;
	headingFontSize?: string;
	subtitleFontSize?: string;
	subtitleLineHeight?: string;
	
	// Message Styles
	messageFontSize?: string;
	messagePadding?: string;
	messageBorderRadius?: string;
	messageLineHeight?: string;
	messageMarginBottom?: string;
	botMessageBackground?: string;
	botMessageColor?: string;
	botMessageBorder?: string;
	userMessageBackground?: string;
	userMessageColor?: string;
	userMessageBorder?: string;
	messagePreBackground?: string;
	messagesListPadding?: string;
	
	// Toggle Button
	toggleSize?: string;
	toggleWidth?: string;
	toggleHeight?: string;
	toggleBorderRadius?: string;
	toggleBackground?: string;
	toggleHoverBackground?: string;
	toggleActiveBackground?: string;
	toggleColor?: string;
	
	// Input Area
	textareaHeight?: string;
	textareaMaxHeight?: string;
	inputFontSize?: string;
	inputBorder?: string;
	inputBorderRadius?: string;
	inputPadding?: string;
	inputBackground?: string;
	inputTextColor?: string;
	inputLineHeight?: string;
	inputPlaceholderFontSize?: string;
	inputBorderActive?: string;
	inputLeftPanelWidth?: string;
	
	// General Button Styles
	buttonColor?: string;
	buttonBackground?: string;
	buttonPadding?: string;
	buttonBorderRadius?: string;
	buttonHoverColor?: string;
	buttonHoverBackground?: string;
	
	// Close Button Specific
	closeButtonSize?: string;
	closeButtonColor?: string;
	closeButtonBackground?: string;
	closeButtonColorHover?: string;
	closeButtonBackgroundHover?: string;
	closeButtonBorderRadius?: string;
	closeButtonPadding?: string;
	closeButtonIconSize?: string;
	closeButtonPosition?: string;
	closeButtonTop?: string;
	closeButtonRight?: string;
	closeButtonBottom?: string;
	closeButtonLeft?: string;
	closeButtonZIndex?: string;
	
	// Send Button Specific
	sendButtonBackground?: string;
	sendButtonColor?: string;
	sendButtonBackgroundHover?: string;
	sendButtonColorHover?: string;
	
	// File Button Specific
	fileButtonBackground?: string;
	fileButtonColor?: string;
	fileButtonBackgroundHover?: string;
	fileButtonColorHover?: string;
	filesSpacing?: string;
	
	// Voice Recording Button (if needed)
	voiceButtonBackground?: string;
	voiceButtonColor?: string;
	voiceButtonBackgroundHover?: string;
	voiceButtonColorHover?: string;
	
	// ElevenLabs Button Specific
	elevenLabsButtonBackground?: string;
	elevenLabsButtonColor?: string;
	elevenLabsButtonBackgroundHover?: string;
	elevenLabsButtonColorHover?: string;
	elevenLabsButtonBackgroundDisabled?: string;
	elevenLabsButtonBorderRadius?: string;
	elevenLabsButtonFocusColor?: string;
	
	// Body and Footer
	bodyBackground?: string;
	footerBackground?: string;
	footerColor?: string;
	
	// Custom CSS
	customCSS?: string;

	// Welcome Message
	welcomeMessageBackground?: string;
	welcomeMessageColor?: string;
	welcomeMessageBorder?: string;
	welcomeMessageBorderRadius?: string;
	welcomeMessagePadding?: string;
	welcomeMessageFontSize?: string;
	welcomeMessageFontFamily?: string;
	welcomeMessageFontWeight?: string;
	welcomeMessageLineHeight?: string;
	welcomeMessageMaxWidth?: string;
	welcomeMessageMinWidth?: string;
	welcomeMessageBoxShadow?: string;
	welcomeMessageBoxShadowHover?: string;
	welcomeMessageBorderHover?: string;
	welcomeMessageTransformHover?: string;
	welcomeMessageTransition?: string;
	welcomeMessageZIndex?: string;
	welcomeMessagePosition?: string;
	welcomeMessageBottom?: string;
	welcomeMessageRight?: string;
	welcomeMessageTop?: string;
	welcomeMessageLeft?: string;

	// Welcome Message Icon
	welcomeMessageIconSize?: string;
	welcomeMessageIconGap?: string;
	welcomeMessageIconEmojiSize?: string;
	welcomeMessageIconBorderRadius?: string;
	welcomeMessageIconBackground?: string;
	welcomeMessageIconPadding?: string;

	// Welcome Message Close Button
	welcomeMessageCloseSize?: string;
	welcomeMessageCloseFontSize?: string;
	welcomeMessageCloseColor?: string;
	welcomeMessageCloseBackground?: string;
	welcomeMessageCloseBackgroundHover?: string;
	welcomeMessageCloseColorHover?: string;
	welcomeMessageCloseBorderRadius?: string;
	welcomeMessageCloseTransition?: string;
	welcomeMessageCloseFocusShadow?: string;

	// Welcome Message Mobile
	welcomeMessageMobileMaxWidth?: string;
	welcomeMessageMobileIconSize?: string;
	welcomeMessageMobileIconEmojiSize?: string;
	welcomeMessageMobileFontSize?: string;
	welcomeMessageMobileGap?: string;

	// Header Icon
	headerIconSize?: string;
	headerIconMarginRight?: string;
	headerIconEmojiSize?: string;
	headerIconBorderRadius?: string;
	headerIconBackground?: string;
	headerIconPadding?: string;
}

export interface ChatOptions {
	webhookUrl: string;
	webhookConfig?: {
		method?: 'GET' | 'POST';
		headers?: Record<string, string>;
	};
	target?: string | Element;
	mode?: 'window' | 'fullscreen';
	showWindowCloseButton?: boolean;
	showWelcomeScreen?: boolean;
	loadPreviousSession?: boolean;
	chatInputKey?: string;
	chatSessionKey?: string;
	defaultLanguage?: 'en';
	initialMessages?: string[];
	metadata?: Record<string, unknown>;
	i18n: Record<
		string,
		{
			title: string;
			subtitle: string;
			footer: string;
			getStarted: string;
			inputPlaceholder: string;
			closeButtonTooltip: string;
			[message: string]: string;
		}
	>;
	theme?: ChatTheme;
	messageComponents?: Record<string, Component>;
	disabled?: Ref<boolean>;
	allowFileUploads?: Ref<boolean> | boolean;
	allowedFilesMimeTypes?: Ref<string> | string;
	elevenLabsAgentUrl?: string;
	showElevenLabsButton?: boolean;
	welcomeMessage?: {
		enabled?: boolean;
		text?: string;
		icon?: string; // Emoji (e.g., '👋', '💬') or image URL/path (e.g., 'https://example.com/logo.png', '/assets/logo.svg')
	};
	headerIcon?: string; // Emoji (e.g., '🤖', '💬') or image URL/path (e.g., 'https://example.com/logo.png', '/assets/logo.svg')
}
