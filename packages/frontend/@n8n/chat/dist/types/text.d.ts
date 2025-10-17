declare const TEXT_SIZE: readonly ["xsmall", "small", "mini", "medium", "large", "xlarge"];
export type TextSize = (typeof TEXT_SIZE)[number];
declare const TEXT_COLOR: readonly ["primary", "secondary", "text-dark", "text-base", "text-light", "text-xlight", "danger", "success", "warning", "foreground-dark", "foreground-xdark"];
export type TextColor = (typeof TEXT_COLOR)[number];
declare const TEXT_ALIGN: readonly ["right", "left", "center"];
export type TextAlign = (typeof TEXT_ALIGN)[number];
declare const TEXT_FLOAT: readonly ["left", "right"];
export type TextFloat = (typeof TEXT_FLOAT)[number];
export {};
