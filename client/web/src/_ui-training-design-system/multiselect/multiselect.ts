import {foundationMultiselect} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationMultiselect);

export const alphaMultiselect = () => foundationMultiselect();

export {Multiselect} from '@genesislcap/foundation-ui';

export const defaultMultiselectConfig = defaultConfig;
export const alphaMultiselectTemplate = template;
export const alphaMultiselectStyles = styles;
export const alphaMultiselectShadowOptions = shadowOptions;
