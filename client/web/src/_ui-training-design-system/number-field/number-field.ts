import {foundationNumberField} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationNumberField);

export const alphaNumberField = () => foundationNumberField();

export {NumberField} from '@genesislcap/foundation-ui';

export const defaultNumberFieldConfig = defaultConfig;
export const alphaNumberFieldTemplate = template;
export const alphaNumberFieldStyles = styles;
export const alphaNumberFieldShadowOptions = shadowOptions;
