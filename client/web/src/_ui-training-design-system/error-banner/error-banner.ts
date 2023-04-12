import { foundationErrorBanner } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationErrorBanner
);

export const alphaErrorBanner = () => foundationErrorBanner();

export { ErrorBanner } from '@genesislcap/foundation-ui';

export const defaultErrorBannerConfig = defaultConfig;
export const alphaErrorBannerTemplate = template;
export const alphaErrorBannerStyles = styles;
export const alphaErrorBannerShadowOptions = shadowOptions;
