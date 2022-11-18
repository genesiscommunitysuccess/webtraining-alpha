import {foundationTab} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTab);

export const alphaTab = () => foundationTab();

export {Tab} from '@genesislcap/foundation-ui';

export const defaultTabConfig = defaultConfig;
export const alphaTabTemplate = template;
export const alphaTabStyles = styles;
export const alphaTabShadowOptions = shadowOptions;
