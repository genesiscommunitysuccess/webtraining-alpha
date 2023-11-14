import { foundationTextField } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationTextField
);

export const alphaTextField = () => foundationTextField();

export { TextField } from '@genesislcap/foundation-ui';

export const defaultTextFieldConfig = defaultConfig;
export const alphaTextFieldTemplate = template;
export const alphaTextFieldStyles = styles;
export const alphaTextFieldShadowOptions = shadowOptions;
