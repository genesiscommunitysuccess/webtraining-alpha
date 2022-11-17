import {foundationTabPanel} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTabPanel);

export const alphaTabPanel = () => foundationTabPanel();

export {TabPanel} from '@genesislcap/foundation-ui';

export const defaultTabPanelConfig = defaultConfig;
export const alphaTabPanelTemplate = template;
export const alphaTabPanelStyles = styles;
export const alphaTabPanelShadowOptions = shadowOptions;
