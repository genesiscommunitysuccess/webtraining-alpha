import {foundationTreeItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTreeItem);

export const alphaTreeItem = () => foundationTreeItem();

export {TreeItem} from '@genesislcap/foundation-ui';

export const defaultTreeItemConfig = defaultConfig;
export const alphaTreeItemTemplate = template;
export const alphaTreeItemStyles = styles;
export const alphaTreeItemShadowOptions = shadowOptions;
