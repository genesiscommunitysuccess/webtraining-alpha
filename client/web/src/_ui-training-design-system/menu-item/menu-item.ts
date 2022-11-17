import {fastMenuItem} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastMenuItem);

export const alphaMenuItem = () => fastMenuItem();

export {MenuItem} from '@microsoft/fast-components';

export const defaultMenuItemConfig = defaultConfig;
export const alphaMenuItemTemplate = template;
export const alphaMenuItemStyles = styles;
export const alphaMenuItemShadowOptions = shadowOptions;
