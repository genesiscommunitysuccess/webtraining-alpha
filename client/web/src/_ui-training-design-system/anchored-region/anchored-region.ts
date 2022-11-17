import {fastAnchoredRegion} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAnchoredRegion);

export const alphaAnchoredRegion = () => fastAnchoredRegion();

export {AnchoredRegion} from '@microsoft/fast-components';

export const defaultAnchoredRegionConfig = defaultConfig;
export const alphaAnchoredRegionTemplate = template;
export const alphaAnchoredRegionStyles = styles;
export const alphaAnchoredRegionShadowOptions = shadowOptions;
