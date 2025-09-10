<template>
	<button
		v-if="shouldShowButton"
		:disabled="disabled"
		class="chat-input-elevenlabs-button"
		:title="t('elevenLabsButtonTooltip')"
		data-test-id="chat-elevenlabs-button"
		@click="openElevenLabsAgent"
	>
		<IconMicrophone height="24" width="24" />
	</button>
</template>

<script setup lang="ts">
import IconMicrophone from 'virtual:icons/mdi/microphone';
import { computed } from 'vue';

import { useI18n, useOptions } from '@n8n/chat/composables';

export interface ElevenLabsButtonProps {
	disabled?: boolean;
}

const props = withDefaults(defineProps<ElevenLabsButtonProps>(), {
	disabled: false,
});

const { t } = useI18n();
const { options } = useOptions();

const shouldShowButton = computed(() => {
	return options.showElevenLabsButton === true && options.elevenLabsAgentUrl;
});

function openElevenLabsAgent(): void {
	if (!options.elevenLabsAgentUrl) {
		console.warn('ElevenLabs agent URL not configured');
		return;
	}

	window.open(options.elevenLabsAgentUrl, '_blank', 'noopener,noreferrer');
}
</script>

<style lang="scss" scoped>
.chat-input-elevenlabs-button {
	height: var(--chat--textarea--height);
	width: var(--chat--textarea--height);
	background: var(--chat--input--elevenlabs--button--background, #6366f1);
	cursor: pointer;
	color: var(--chat--input--elevenlabs--button--color, white);
	border: 0;
	font-size: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: all var(--chat--transition-duration) ease;
	border-radius: var(--chat--input--elevenlabs--button--border-radius, 4px);
	flex-shrink: 0;
	box-sizing: border-box;

	svg {
		min-width: fit-content;
		transition: transform var(--chat--transition-duration) ease;
	}

	&:hover {
		background: var(--chat--input--elevenlabs--button--background-hover, #4f46e5);
		color: var(--chat--input--elevenlabs--button--color-hover, white);
		
		svg {
			transform: scale(1.1);
		}
	}

	&:focus {
		outline: none;
	}

	&[disabled] {
		cursor: no-drop;
		color: var(--chat--color-disabled);
		background: var(--chat--input--elevenlabs--button--background-disabled, #9ca3af);
		transform: none;

		&:hover {
			background: var(--chat--input--elevenlabs--button--background-disabled, #9ca3af);
			transform: none;
		}
	}
}
</style>
