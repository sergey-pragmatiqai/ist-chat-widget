import { TextColor } from '@n8n/design-system/types/text';
declare const ICON_SIZE: readonly ["xsmall", "small", "medium", "large", "xlarge"];
export type IconSize = (typeof ICON_SIZE)[number];
export type IconColor = TextColor;
declare const ICON_ORIENTATION: readonly ["horizontal", "vertical"];
export type IconOrientation = (typeof ICON_ORIENTATION)[number];
export {};
