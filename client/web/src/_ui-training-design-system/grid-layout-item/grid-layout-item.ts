import { foundationGridLayoutItem } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationGridLayoutItem
);

export const alphaGridLayoutItem = () => foundationGridLayoutItem();

export { GridLayoutItem } from '@genesislcap/foundation-ui';

export const defaultGridLayoutItemConfig = defaultConfig;
export const alphaGridLayoutItemTemplate = template;
export const alphaGridLayoutItemStyles = styles;
export const alphaGridLayoutItemShadowOptions = shadowOptions;
