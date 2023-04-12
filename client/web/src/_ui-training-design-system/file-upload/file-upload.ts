import { foundationFileUpload } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationFileUpload
);

export const alphaFileUpload = () => foundationFileUpload();

export { FileUpload } from '@genesislcap/foundation-ui';

export const defaultFileUploadConfig = defaultConfig;
export const alphaFileUploadTemplate = template;
export const alphaFileUploadStyles = styles;
export const alphaFileUploadShadowOptions = shadowOptions;
