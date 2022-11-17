import {foundationTextArea} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTextArea);

export const alphaTextArea = () => foundationTextArea();

export {TextArea} from '@genesislcap/foundation-ui';

export const defaultTextAreaConfig = defaultConfig;
export const alphaTextAreaTemplate = template;
export const alphaTextAreaStyles = styles;
export const alphaTextAreaShadowOptions = shadowOptions;
