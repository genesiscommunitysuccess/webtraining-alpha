import {fastAvatar} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAvatar);

export const alphaAvatar = () => fastAvatar();

export {Avatar} from '@microsoft/fast-components';

export const defaultAvatarConfig = defaultConfig;
export const alphaAvatarTemplate = template;
export const alphaAvatarStyles = styles;
export const alphaAvatarShadowOptions = shadowOptions;
