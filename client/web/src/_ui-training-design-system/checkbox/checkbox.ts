import {foundationCheckbox} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationCheckbox);

export const alphaCheckbox = () => foundationCheckbox();

export {Checkbox} from '@genesislcap/foundation-ui';

export const defaultCheckboxConfig = defaultConfig;
export const alphaCheckboxTemplate = template;
export const alphaCheckboxStyles = styles;
export const alphaCheckboxShadowOptions = shadowOptions;
