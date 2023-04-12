import { foundationSnackbar } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationSnackbar
);

export const alphaSnackbar = () => foundationSnackbar();

export { Snackbar } from '@genesislcap/foundation-ui';

export const defaultSnackbarConfig = defaultConfig;
export const alphaSnackbarTemplate = template;
export const alphaSnackbarStyles = styles;
export const alphaSnackbarShadowOptions = shadowOptions;
