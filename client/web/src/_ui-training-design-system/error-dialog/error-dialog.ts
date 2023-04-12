import { foundationErrorDialog } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationErrorDialog
);

export const alphaErrorDialog = () => foundationErrorDialog();

export { ErrorDialog } from '@genesislcap/foundation-ui';

export const defaultErrorDialogConfig = defaultConfig;
export const alphaErrorDialogTemplate = template;
export const alphaErrorDialogStyles = styles;
export const alphaErrorDialogShadowOptions = shadowOptions;
