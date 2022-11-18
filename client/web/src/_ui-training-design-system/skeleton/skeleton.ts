import {foundationSkeleton} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSkeleton);

export const alphaSkeleton = () => foundationSkeleton();

export {Skeleton} from '@genesislcap/foundation-ui';

export const defaultSkeletonConfig = defaultConfig;
export const alphaSkeletonTemplate = template;
export const alphaSkeletonStyles = styles;
export const alphaSkeletonShadowOptions = shadowOptions;
