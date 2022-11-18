import {fastHorizontalScroll} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastHorizontalScroll);

export const alphaHorizontalScroll = () => fastHorizontalScroll();

export {HorizontalScroll} from '@microsoft/fast-components';

export const defaultHorizontalScrollConfig = defaultConfig;
export const alphaHorizontalScrollTemplate = template;
export const alphaHorizontalScrollStyles = styles;
export const alphaHorizontalScrollShadowOptions = shadowOptions;
