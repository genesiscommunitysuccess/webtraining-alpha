import {foundationBreadcrumbItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationBreadcrumbItem);

export const alphaBreadcrumbItem = () => foundationBreadcrumbItem();

export {BreadcrumbItem} from '@genesislcap/foundation-ui';

export const defaultBreadcrumbItemConfig = defaultConfig;
export const alphaBreadcrumbItemTemplate = template;
export const alphaBreadcrumbItemStyles = styles;
export const alphaBreadcrumbItemShadowOptions = shadowOptions;
