import {foundationSlider} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSlider);

export const alphaSlider = () => foundationSlider();

export {Slider} from '@genesislcap/foundation-ui';

export const defaultSliderConfig = defaultConfig;
export const alphaSliderTemplate = template;
export const alphaSliderStyles = styles;
export const alphaSliderShadowOptions = shadowOptions;
