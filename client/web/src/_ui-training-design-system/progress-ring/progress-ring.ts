import {foundationProgressRing} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationProgressRing);

export const alphaProgressRing = () => foundationProgressRing();

export {ProgressRing} from '@genesislcap/foundation-ui';

export const defaultProgressRingConfig = defaultConfig;
export const alphaProgressRingTemplate = template;
export const alphaProgressRingStyles = styles;
export const alphaProgressRingShadowOptions = shadowOptions;
