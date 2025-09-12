import type { ChatOptions } from '@n8n/chat/types';

export const defaultOptions: ChatOptions = {
	webhookUrl: 'http://localhost:5678',
	webhookConfig: {
		method: 'POST',
		headers: {},
	},
	target: '#n8n-chat',
	mode: 'window',
	loadPreviousSession: true,
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	defaultLanguage: 'en',
	showWelcomeScreen: false,
	showPoweredBy: true,
	initialMessages: ['Hi there! 👋', 'My name is Nathan. How can I assist you today?'],
	welcomeMessage: {
		enabled: false,
	},
	i18n: {
		en: {
			title: 'Hi there! 👋',
			subtitle: '',
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
			closeButtonTooltip: 'Close chat',
			elevenLabsButtonTooltip: 'Open ElevenLabs Agent',
		},
	},
	theme: {},
};

export const defaultMountingTarget = '#n8n-chat';
