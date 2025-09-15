<script setup lang="ts">
import { computed } from 'vue';

import { useOptions } from '@n8n/chat/composables';

interface Props {
	show?: boolean;
}

interface Emits {
	(event: 'close'): void;
	(event: 'click'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const { options } = useOptions();

const welcomeText = computed(() => {
	return options.welcomeMessage?.text;
});

const welcomeIcon = computed(() => {
	return options.welcomeMessage?.icon;
});

const isImageIcon = computed(() => {
	const icon = welcomeIcon.value;
	// Check if it's an image URL (http/https/data URI) or file path
	return typeof icon === 'string' && (
		icon.startsWith('http://') ||
		icon.startsWith('https://') ||
		icon.startsWith('data:image/') ||
		icon.startsWith('/') ||
		icon.includes('.') && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.jpeg') || icon.includes('.gif') || icon.includes('.svg') || icon.includes('.webp'))
	);
});

function handleClick() {
	emit('click');
	emit('close');
}

function handleClose() {
	emit('close');
}

function onBeforeLeave(el: Element) {
	// Lock the width to prevent reflow
	const element = el as HTMLElement;
	const computedStyle = getComputedStyle(element);
	element.style.width = computedStyle.width;
	element.style.minWidth = computedStyle.width;
	element.style.maxWidth = computedStyle.width;
}

function onLeave(el: Element) {
	// Keep dimensions locked during transition
}

function onAfterLeave() {
	// Clean up after transition
}
</script>

<template>
	<Transition 
		name="welcome-message-transition"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
		@after-leave="onAfterLeave"
	>
		<div v-if="show && welcomeText" class="welcome-message">
			<button class="welcome-message-close" @click="handleClose">×</button>
			<div class="welcome-message-content" @click="handleClick">
				<div v-if="welcomeIcon" class="welcome-message-icon">
					<img 
						v-if="isImageIcon" 
						:src="welcomeIcon" 
						:alt="'Welcome icon'" 
						class="welcome-message-icon-image"
					/>
					<span v-else class="welcome-message-icon-emoji">{{ welcomeIcon }}</span>
				</div>
				<div v-if="welcomeText" class="welcome-message-text">{{ welcomeText }}</div>
			</div>
		</div>
	</Transition>
</template>

<style lang="scss">
.welcome-message {
	position: var(--chat--welcome-message--position);
	bottom: var(--chat--welcome-message--bottom);
	right: var(--chat--welcome-message--right);
	top: var(--chat--welcome-message--top);
	left: var(--chat--welcome-message--left);
	background: var(--chat--welcome-message--background);
	color: var(--chat--welcome-message--color);
	border: var(--chat--welcome-message--border);
	border-radius: var(--chat--welcome-message--border-radius);
	padding: var(--chat--welcome-message--padding);
	font-size: var(--chat--welcome-message--font-size);
	font-family: var(--chat--welcome-message--font-family);
	font-weight: var(--chat--welcome-message--font-weight);
	line-height: var(--chat--welcome-message--line-height);
	max-width: var(--chat--welcome-message--max-width);
	min-width: var(--chat--welcome-message--min-width);
	box-shadow: var(--chat--welcome-message--box-shadow);
	z-index: var(--chat--welcome-message--z-index);
	cursor: pointer;
	transition: var(--chat--welcome-message--transition);

	&:hover {
		transform: var(--chat--welcome-message--transform-hover);
		box-shadow: var(--chat--welcome-message--box-shadow-hover);
		border-color: var(--chat--welcome-message--border-hover);
	}

	.welcome-message-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: var(--chat--welcome-message--close--background);
		border: none;
		font-size: var(--chat--welcome-message--close--font-size);
		cursor: pointer;
		color: var(--chat--welcome-message--close--color);
		width: var(--chat--welcome-message--close--size);
		height: var(--chat--welcome-message--close--size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--chat--welcome-message--close--border-radius);
		transition: var(--chat--welcome-message--close--transition);
		line-height: 1;

		&:hover {
			background: var(--chat--welcome-message--close--background-hover);
			color: var(--chat--welcome-message--close--color-hover);
		}

		&:focus {
			outline: none;
			box-shadow: var(--chat--welcome-message--close--focus-shadow);
		}
	}

	.welcome-message-content {
		display: flex;
		align-items: var(--chat--welcome-message--align-items);
		justify-content: var(--chat--welcome-message--justify-content);
		gap: var(--chat--welcome-message--icon--gap);
		padding-right: 1.5rem; // Space for close button
	}

	.welcome-message-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--chat--welcome-message--icon--size);
		height: var(--chat--welcome-message--icon--size);
		background: var(--chat--welcome-message--icon--background);
		border-radius: var(--chat--welcome-message--icon--border-radius);
		padding: var(--chat--welcome-message--icon--padding);
		box-sizing: border-box;
		
		.welcome-message-icon-emoji {
			font-size: var(--chat--welcome-message--icon--emoji-size);
			line-height: 1;
		}
		
		.welcome-message-icon-image {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: var(--chat--welcome-message--icon--border-radius);
		}
	}

	.welcome-message-text {
		flex: 1;
		line-height: var(--chat--welcome-message--line-height);
		font-weight: var(--chat--welcome-message--font-weight);
		text-align: var(--chat--welcome-message--text-align);
		white-space: pre-line;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	// Responsive adjustments
	@media (max-width: 480px) {
		max-width: var(--chat--welcome-message--mobile--max-width);
		min-width: auto;
		right: var(--chat--spacing);
		left: var(--chat--spacing);
		
		.welcome-message-content {
			gap: var(--chat--welcome-message--mobile--gap);
		}
		
		.welcome-message-icon {
			width: var(--chat--welcome-message--mobile--icon-size);
			height: var(--chat--welcome-message--mobile--icon-size);
			
			.welcome-message-icon-emoji {
				font-size: var(--chat--welcome-message--mobile--icon-emoji-size);
			}
		}
		
		.welcome-message-text {
			font-size: var(--chat--welcome-message--mobile--font-size);
		}
	}
}

// Smooth animations with n8n timing
.welcome-message-transition {
	&-enter-active {
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	
	&-leave-active {
		transition: opacity 0.3s ease-out;
		// Prevent any layout changes during transition
		overflow: hidden;
	}

	&-enter-from {
		transform: translateY(0.5rem) scale(0.95);
		opacity: 0;
	}

	&-leave-to {
		opacity: 0;
	}
}
</style>
