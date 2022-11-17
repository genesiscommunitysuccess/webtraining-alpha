import {foundationTreeView} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTreeView);

export const alphaTreeView = () => foundationTreeView();

export {TreeView} from '@genesislcap/foundation-ui';

export const defaultTreeViewConfig = defaultConfig;
export const alphaTreeViewTemplate = template;
export const alphaTreeViewStyles = styles;
export const alphaTreeViewShadowOptions = shadowOptions;
