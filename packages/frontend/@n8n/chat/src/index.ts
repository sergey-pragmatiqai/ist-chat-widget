import './main.scss';

import { createApp } from 'vue';

import { defaultMountingTarget, defaultOptions } from '@n8n/chat/constants';
import { ChatPlugin } from '@n8n/chat/plugins';
import type { ChatOptions } from '@n8n/chat/types';
import { createDefaultMountingTarget, applyTheme, applyFonts } from '@n8n/chat/utils';

import App from './App.vue';

export function createChat(options?: Partial<ChatOptions>) {
	const resolvedOptions: ChatOptions = {
		...defaultOptions,
		...options,
		webhookConfig: {
			...defaultOptions.webhookConfig,
			...options?.webhookConfig,
		},
		i18n: {
			...defaultOptions.i18n,
			...options?.i18n,
			en: {
				...defaultOptions.i18n?.en,
				...options?.i18n?.en,
			},
		},
		theme: {
			...defaultOptions.theme,
			...options?.theme,
		},
		welcomeMessage: {
			...defaultOptions.welcomeMessage,
			...options?.welcomeMessage,
		},
	};

	const mountingTarget = resolvedOptions.target ?? defaultMountingTarget;
	if (typeof mountingTarget === 'string') {
		createDefaultMountingTarget(mountingTarget);
	}

	// Apply theme if provided
	if (resolvedOptions.theme) {
		applyTheme(resolvedOptions.theme);
		applyFonts(resolvedOptions.theme);
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const app = createApp(App);
	app.use(ChatPlugin, resolvedOptions);
	app.mount(mountingTarget);
	return app;
}
