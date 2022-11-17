import {foundationFlipper} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFlipper);

export const alphaFlipper = () => foundationFlipper();

export {Flipper} from '@genesislcap/foundation-ui';

export const defaultFlipperConfig = defaultConfig;
export const alphaFlipperTemplate = template;
export const alphaFlipperStyles = styles;
export const alphaFlipperShadowOptions = shadowOptions;
