import { foundationBanner } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationBanner
);

export const alphaBanner = () => foundationBanner();

export { Banner } from '@genesislcap/foundation-ui';

export const defaultBannerConfig = defaultConfig;
export const alphaBannerTemplate = template;
export const alphaBannerStyles = styles;
export const alphaBannerShadowOptions = shadowOptions;
