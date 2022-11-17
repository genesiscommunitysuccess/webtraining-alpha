import {foundationDivider} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDivider);

export const alphaDivider = () => foundationDivider();

export {Divider} from '@genesislcap/foundation-ui';

export const defaultDividerConfig = defaultConfig;
export const alphaDividerTemplate = template;
export const alphaDividerStyles = styles;
export const alphaDividerShadowOptions = shadowOptions;
