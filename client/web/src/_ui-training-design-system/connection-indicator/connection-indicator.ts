import { foundationConnectionIndicator } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationConnectionIndicator
);

export const alphaConnectionIndicator = () => foundationConnectionIndicator();

export { ConnectionIndicator } from '@genesislcap/foundation-ui';

export const defaultConnectionIndicatorConfig = defaultConfig;
export const alphaConnectionIndicatorTemplate = template;
export const alphaConnectionIndicatorStyles = styles;
export const alphaConnectionIndicatorShadowOptions = shadowOptions;
