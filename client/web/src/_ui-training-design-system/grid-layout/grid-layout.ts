import { foundationGridLayout } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationGridLayout
);

export const alphaGridLayout = () => foundationGridLayout();

export { GridLayout } from '@genesislcap/foundation-ui';

export const defaultGridLayoutConfig = defaultConfig;
export const alphaGridLayoutTemplate = template;
export const alphaGridLayoutStyles = styles;
export const alphaGridLayoutShadowOptions = shadowOptions;
