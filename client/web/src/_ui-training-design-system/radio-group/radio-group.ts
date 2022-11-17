import {foundationRadioGroup} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationRadioGroup);

export const alphaRadioGroup = () => foundationRadioGroup();

export {RadioGroup} from '@genesislcap/foundation-ui';

export const defaultRadioGroupConfig = defaultConfig;
export const alphaRadioGroupTemplate = template;
export const alphaRadioGroupStyles = styles;
export const alphaRadioGroupShadowOptions = shadowOptions;
