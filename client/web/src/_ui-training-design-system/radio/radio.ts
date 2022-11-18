import {foundationRadio} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationRadio);

export const alphaRadio = () => foundationRadio();

export {Radio} from '@genesislcap/foundation-ui';

export const defaultRadioConfig = defaultConfig;
export const alphaRadioTemplate = template;
export const alphaRadioStyles = styles;
export const alphaRadioShadowOptions = shadowOptions;
