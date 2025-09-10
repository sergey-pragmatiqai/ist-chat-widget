import './main.scss';
import { createChat } from './index';

// Development configuration
const webhookUrl = 'https://n8n.pragmatiqai.com/webhook/812534ca-e29c-474c-b93f-7fd61319d06f/chat';

// Create the chat widget when the page loads
document.addEventListener('DOMContentLoaded', () => {
	// Create a container for the chat if it doesn't exist
	if (!document.getElementById('n8n-chat')) {
		const container = document.createElement('div');
		container.id = 'n8n-chat';
		document.body.appendChild(container);
	}

	createChat({
		webhookUrl,
		mode: 'window',
		showElevenLabsButton: true,
		showWindowCloseButton: true,
		elevenLabsAgentUrl:
			'https://elevenlabs.io/app/talk-to?agent_id=agent_8701k4512n9dfaxsceyn1af41ea6',

		theme: {
			// IST Brand Colors
			primaryColor: '#112351', // IST Velvet Blue
			secondaryColor: '#112351', // Teal for buttons
			lightColor: '#f5f5f5', // Light gray background
			darkColor: '#112351', // Dark blue text
			headerBackground: '#112351', // Blue header
			headerColor: '#ffffff', // White header text

			// Send button styling
			sendButtonBackground: '#ffffff', // White background
			sendButtonColor: '#112351', // Blue icon
			sendButtonBackgroundHover: '#0f1f47', // Teal background on hover
			sendButtonColorHover: '#ffffff', // White icon on hover

			// Toggle/Chat button (fixes the red color)
			toggleBackground: '#112351', // IST Blue
			toggleHoverBackground: '#1a2d5f', // Darker blue on hover
			toggleActiveBackground: '#0f1f47', // Even darker when active/pressed

			// Layout
			borderRadius: '12px',
			spacing: '1.2rem',
			messageFontSize: '16px',
			fontFamily: "Georgia, 'Times New Roman', Times, serif",

      //ElevenLabs Button
      elevenLabsButtonBackground: '#112351',
      elevenLabsButtonColor: '#ffffff',
      elevenLabsButtonBackgroundHover: '#0f1f47',
      elevenLabsButtonColorHover: '#ffffff',
      elevenLabsButtonBackgroundDisabled: '#9ca3af',
      elevenLabsButtonBorderRadius: '8px',
      elevenLabsButtonFocusColor: '#112351',

      //Close Button
      closeButtonColor: '#ffffff',
      closeButtonBorderRadius: '8px',
      closeButtonPadding: '6px',
      closeButtonIconSize: '18px',
      closeButtonPosition: 'static',
      closeButtonTop: 'auto',
      closeButtonRight: 'auto',
      closeButtonBottom: 'auto',
      closeButtonLeft: 'auto',
      closeButtonZIndex: 'auto',

      // Header Icon Customization (optional)
      headerIconSize: '80px',
      headerIconMarginRight: '0.75rem',
      headerIconBorderRadius: '8px',
      headerIconPadding: '8px', 

      // Welcome Message Customization (optional)
      welcomeMessageBackground: '#f8f9fa',
      welcomeMessageColor: '#112351',
      welcomeMessageBorder: '1px solid #112351',
      welcomeMessageBorderRadius: '16px',
      welcomeMessageFontSize: '15px',
      welcomeMessageCloseColorHover: '#112351',
      welcomeMessageCloseBorderRadius: '16px',
      welcomeMessageCloseTransition: 'all 0.3s ease',
      welcomeMessageCloseFocusShadow: '0 0 0 2px #112351',
      welcomeMessageIconSize: '36px',
      welcomeMessageIconGap: '16px',

			// Window size
			windowWidth: '420px',
			windowHeight: '650px',
		},

		i18n: {
			en: {
				title: 'Welcome to the International School of Tallinn!',
				subtitle: '',
				footer: 'Footer',
				getStarted: 'New Conversation',
				inputPlaceholder: 'Type your question..',
				closeButtonTooltip: 'Close chat',
				elevenLabsButtonTooltip: 'Open ElevenLabs Agent',
			},
		},

		// Header icon configuration (appears to the left of the title)
		headerIcon: 'https://www.clipartmax.com/png/full/110-1103840_fb-chat-bots-chat-bot-icon-png.png',

		// Welcome message configuration
		welcomeMessage: {
			enabled: true,
			text: 'Hi! How may I help you?',
			icon: 'https://www.clipartmax.com/png/full/110-1103840_fb-chat-bots-chat-bot-icon-png.png', 
		},

		initialMessages: [
			"**Hello and welcome!** I'm the fully automated **AI Assistant** for the **International School of Tallinn**, here to support you at any time.\n\nYou're welcome to ask me about:\n\n• Admissions (Preschool to Grade 12 – IB PYP, MYP, DP)\n\n• Tuition fees and available discounts\n\n• How to apply, including trial days and enrolment steps\n\n• Languages and support for international students\n\n• School calendar, meals, daily routines, and contact details\n\nIf I can't help directly, I'll make sure your question reaches the right person. \n\n Please note that for your privacy and security, we recommend avoiding the sharing of personal or confidential information through this chat.",
			'How may I assist you today?',
		],
	});
});
