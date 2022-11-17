import {fastMenu} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastMenu);

export const alphaMenu = () => fastMenu();

export {Menu} from '@microsoft/fast-components';

export const defaultMenuConfig = defaultConfig;
export const alphaMenuTemplate = template;
export const alphaMenuStyles = styles;
export const alphaMenuShadowOptions = shadowOptions;
