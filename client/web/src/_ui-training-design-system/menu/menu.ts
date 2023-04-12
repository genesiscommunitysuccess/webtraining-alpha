import { foundationMenu } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationMenu
);

export const alphaMenu = () => foundationMenu();

export { Menu } from '@genesislcap/foundation-ui';

export const defaultMenuConfig = defaultConfig;
export const alphaMenuTemplate = template;
export const alphaMenuStyles = styles;
export const alphaMenuShadowOptions = shadowOptions;
