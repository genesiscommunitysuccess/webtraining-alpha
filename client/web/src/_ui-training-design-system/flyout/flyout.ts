import {foundationFlyout} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFlyout);

export const alphaFlyout = () => foundationFlyout();

export {Flyout} from '@genesislcap/foundation-ui';

export const defaultFlyoutConfig = defaultConfig;
export const alphaFlyoutTemplate = template;
export const alphaFlyoutStyles = styles;
export const alphaFlyoutShadowOptions = shadowOptions;
