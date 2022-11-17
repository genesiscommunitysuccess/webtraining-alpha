import {fastSliderLabel} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastSliderLabel);

export const alphaSliderLabel = () => fastSliderLabel();

export {SliderLabel} from '@microsoft/fast-components';

export const defaultSliderLabelConfig = defaultConfig;
export const alphaSliderLabelTemplate = template;
export const alphaSliderLabelStyles = styles;
export const alphaSliderLabelShadowOptions = shadowOptions;
