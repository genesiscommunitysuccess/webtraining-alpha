import {foundationIcon} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationIcon);

export const alphaIcon = () => foundationIcon();

export {Icon} from '@genesislcap/foundation-ui';

export const defaultIconConfig = defaultConfig;
export const alphaIconTemplate = template;
export const alphaIconStyles = styles;
export const alphaIconShadowOptions = shadowOptions;
