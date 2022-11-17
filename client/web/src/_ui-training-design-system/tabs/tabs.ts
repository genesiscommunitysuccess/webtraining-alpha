import {foundationTabs} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTabs);

export const alphaTabs = () => foundationTabs();

export {Tabs} from '@genesislcap/foundation-ui';

export const defaultTabsConfig = defaultConfig;
export const alphaTabsTemplate = template;
export const alphaTabsStyles = styles;
export const alphaTabsShadowOptions = shadowOptions;
