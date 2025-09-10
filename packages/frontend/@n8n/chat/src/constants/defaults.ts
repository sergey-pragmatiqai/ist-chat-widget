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
	initialMessages: ['Hi there! 👋', 'My name is Nathan. How can I assist you today?'],
	welcomeMessage: {
		enabled: false,
		text: 'Hello! Click here to start chatting with us.',
		icon: '👋',
	},
	i18n: {
		en: {
			title: 'Hi there! 👋',
			subtitle: "Start a chat. We're here to help you 24/7.",
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
