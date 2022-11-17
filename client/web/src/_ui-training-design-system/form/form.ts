import {foundationForm} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationForm);

export const alphaForm = () => foundationForm();

export {Form} from '@genesislcap/foundation-ui';

export const defaultFormConfig = defaultConfig;
export const alphaFormTemplate = template;
export const alphaFormStyles = styles;
export const alphaFormShadowOptions = shadowOptions;
