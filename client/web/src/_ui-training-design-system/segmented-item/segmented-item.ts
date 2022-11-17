import {foundationSegmentedItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSegmentedItem);

export const alphaSegmentedItem = () => foundationSegmentedItem();

export {SegmentedItem} from '@genesislcap/foundation-ui';

export const defaultSegmentedItemConfig = defaultConfig;
export const alphaSegmentedItemTemplate = template;
export const alphaSegmentedItemStyles = styles;
export const alphaSegmentedItemShadowOptions = shadowOptions;
