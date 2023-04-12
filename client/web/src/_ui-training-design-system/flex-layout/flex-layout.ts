import { foundationFlexLayout } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationFlexLayout
);

export const alphaFlexLayout = () => foundationFlexLayout();

export { FlexLayout } from '@genesislcap/foundation-ui';

export const defaultFlexLayoutConfig = defaultConfig;
export const alphaFlexLayoutTemplate = template;
export const alphaFlexLayoutStyles = styles;
export const alphaFlexLayoutShadowOptions = shadowOptions;
