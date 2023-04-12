import { foundationMenuItem } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationMenuItem
);

export const alphaMenuItem = () => foundationMenuItem();

export { MenuItem } from '@genesislcap/foundation-ui';

export const defaultMenuItemConfig = defaultConfig;
export const alphaMenuItemTemplate = template;
export const alphaMenuItemStyles = styles;
export const alphaMenuItemShadowOptions = shadowOptions;
