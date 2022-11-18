import {foundationDataGrid} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDataGrid);

export const alphaDataGrid = () => foundationDataGrid();

export {DataGrid} from '@genesislcap/foundation-ui';

export const defaultDataGridConfig = defaultConfig;
export const alphaDataGridTemplate = template;
export const alphaDataGridStyles = styles;
export const alphaDataGridShadowOptions = shadowOptions;
