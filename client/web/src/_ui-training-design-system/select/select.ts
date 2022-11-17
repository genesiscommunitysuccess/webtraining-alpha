import {foundationSelect} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSelect);

export const alphaSelect = () => foundationSelect();

export {Select} from '@genesislcap/foundation-ui';

export const defaultSelectConfig = defaultConfig;
export const alphaSelectTemplate = template;
export const alphaSelectStyles = styles;
export const alphaSelectShadowOptions = shadowOptions;
