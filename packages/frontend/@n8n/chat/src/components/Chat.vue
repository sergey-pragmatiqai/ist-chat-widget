<script setup lang="ts">
import Close from 'virtual:icons/mdi/close';
import { computed, nextTick, onMounted } from 'vue';

import GetStarted from '@n8n/chat/components/GetStarted.vue';
import GetStartedFooter from '@n8n/chat/components/GetStartedFooter.vue';
import Input from '@n8n/chat/components/Input.vue';
import Layout from '@n8n/chat/components/Layout.vue';
import MessagesList from '@n8n/chat/components/MessagesList.vue';
import { useI18n, useChat, useOptions } from '@n8n/chat/composables';
import { chatEventBus } from '@n8n/chat/event-buses';

const { t } = useI18n();
const chatStore = useChat();

const { messages, currentSessionId } = chatStore;
const { options } = useOptions();

const showCloseButton = computed(() => options.mode === 'window' && options.showWindowCloseButton);

const headerIcon = computed(() => options.headerIcon);

const isImageHeaderIcon = computed(() => {
	const icon = headerIcon.value;
	// Check if it's an image URL (http/https/data URI) or file path
	return (
		typeof icon === 'string' &&
		(icon.startsWith('http://') ||
			icon.startsWith('https://') ||
			icon.startsWith('data:image/') ||
			icon.startsWith('/') ||
			(icon.includes('.') &&
				(icon.includes('.png') ||
					icon.includes('.jpg') ||
					icon.includes('.jpeg') ||
					icon.includes('.gif') ||
					icon.includes('.svg') ||
					icon.includes('.webp'))))
	);
});

async function getStarted() {
	if (!chatStore.startNewSession) {
		return;
	}
	void chatStore.startNewSession();
	void nextTick(() => {
		chatEventBus.emit('scrollToBottom');
	});
}

async function initialize() {
	if (!chatStore.loadPreviousSession) {
		return;
	}
	await chatStore.loadPreviousSession();
	void nextTick(() => {
		chatEventBus.emit('scrollToBottom');
	});
}

function closeChat() {
	chatEventBus.emit('close');
}

onMounted(async () => {
	await initialize();
	if (!options.showWelcomeScreen && !currentSessionId.value) {
		await getStarted();
	}
});
</script>

<template>
	<Layout class="chat-wrapper">
		<template #header>
			<div class="chat-heading">
				<div class="chat-title-with-icon">
					<div v-if="headerIcon" class="chat-header-icon">
						<img
							v-if="isImageHeaderIcon"
							:src="headerIcon"
							:alt="'Header icon'"
							class="chat-header-icon-image"
						/>
						<span v-else class="chat-header-icon-emoji">{{ headerIcon }}</span>
					</div>
					<h1>
						{{ t('title') }}
					</h1>
				</div>
				<button
					v-if="showCloseButton"
					class="chat-close-button"
					:title="t('closeButtonTooltip')"
					@click="closeChat"
				>
					<Close height="18" width="18" />
				</button>
			</div>
			<p v-if="t('subtitle')">{{ t('subtitle') }}</p>
		</template>
		<GetStarted v-if="!currentSessionId && options.showWelcomeScreen" @click:button="getStarted" />
		<MessagesList v-else :messages="messages" />
		<template #footer>
			<Input v-if="currentSessionId" />
			<GetStartedFooter v-else />
		</template>
	</Layout>
</template>

<style lang="scss">
.chat-heading {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.chat-title-with-icon {
	display: flex;
	align-items: center;
	gap: var(--chat--header--icon--margin-right);
}

.chat-header-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--chat--header--icon--size);
	height: var(--chat--header--icon--size);
	background: var(--chat--header--icon--background);
	border-radius: var(--chat--header--icon--border-radius);
	padding: var(--chat--header--icon--padding);
	flex-shrink: 0;
	box-sizing: border-box;

	.chat-header-icon-emoji {
		font-size: var(--chat--header--icon--emoji-size);
		line-height: 1;
	}

	.chat-header-icon-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: var(--chat--header--icon--border-radius);
	}
}

.chat-close-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--chat--close--button--size, 32px);
	height: var(--chat--close--button--size, 32px);
	padding: var(--chat--close--button--padding, 6px);
	border: none;
	border-radius: var(--chat--close--button--border-radius, var(--chat--border-radius));
	background: var(--chat--close--button--background, none);
	color: var(--chat--close--button--color, var(--chat--color-medium));
	cursor: pointer;
	transition: all var(--chat--transition-duration) ease;
	box-sizing: border-box;
	flex-shrink: 0;
	position: var(--chat--close--button--position, static);
	top: var(--chat--close--button--top, auto);
	right: var(--chat--close--button--right, auto);
	bottom: var(--chat--close--button--bottom, auto);
	left: var(--chat--close--button--left, auto);
	z-index: var(--chat--close--button--z-index, auto);

	svg {
		width: var(--chat--close--button--icon-size, 18px);
		height: var(--chat--close--button--icon-size, 18px);
		transition: transform var(--chat--transition-duration) ease;
	}

	&:hover {
		background: var(--chat--close--button--background-hover, none);
		color: var(--chat--close--button--color-hover, var(--chat--color-white));
		opacity: 1;

		svg {
			transform: scale(1.1);
		}
	}

	&:focus {
		outline: none;
	}

	&:active {
		transform: scale(0.95);
	}
}
</style>
