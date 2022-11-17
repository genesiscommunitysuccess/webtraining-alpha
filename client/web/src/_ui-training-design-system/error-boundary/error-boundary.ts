import {foundationErrorBoundary} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationErrorBoundary);

export const alphaErrorBoundary = () => foundationErrorBoundary();

export {ErrorBoundary} from '@genesislcap/foundation-ui';

export const defaultErrorBoundaryConfig = defaultConfig;
export const alphaErrorBoundaryTemplate = template;
export const alphaErrorBoundaryStyles = styles;
export const alphaErrorBoundaryShadowOptions = shadowOptions;
