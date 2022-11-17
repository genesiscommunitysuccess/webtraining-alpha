import {foundationDatePicker} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDatePicker);

export const alphaDatePicker = () => foundationDatePicker();

export {DatePicker} from '@genesislcap/foundation-ui';

export const defaultDatePickerConfig = defaultConfig;
export const alphaDatePickerTemplate = template;
export const alphaDatePickerStyles = styles;
export const alphaDatePickerShadowOptions = shadowOptions;
