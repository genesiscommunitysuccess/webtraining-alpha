import {foundationCombobox} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationCombobox);

export const alphaCombobox = () => foundationCombobox();

export {Combobox} from '@genesislcap/foundation-ui';

export const defaultComboboxConfig = defaultConfig;
export const alphaComboboxTemplate = template;
export const alphaComboboxStyles = styles;
export const alphaComboboxShadowOptions = shadowOptions;
