import {foundationBadge} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationBadge);

export const alphaBadge = () => foundationBadge();

export {Badge} from '@genesislcap/foundation-ui';

export const defaultBadgeConfig = defaultConfig;
export const alphaBadgeTemplate = template;
export const alphaBadgeStyles = styles;
export const alphaBadgeShadowOptions = shadowOptions;
