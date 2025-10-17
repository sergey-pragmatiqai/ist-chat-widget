import { IconSize, IconColor } from '../../types/icon';
import { IconName } from './icons';
interface IconProps {
    icon: IconName;
    size?: IconSize | number;
    spin?: boolean;
    color?: IconColor;
    strokeWidth?: number | undefined;
}
declare const _default: import('vue').DefineComponent<IconProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IconProps> & Readonly<{}>, {
    size: IconSize | number;
    spin: boolean;
    color: IconColor;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
