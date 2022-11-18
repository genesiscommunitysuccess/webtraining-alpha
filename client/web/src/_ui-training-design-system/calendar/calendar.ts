import {fastCalendar} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastCalendar);

export const alphaCalendar = () => fastCalendar();

export {Calendar} from '@microsoft/fast-components';

export const defaultCalendarConfig = defaultConfig;
export const alphaCalendarTemplate = template;
export const alphaCalendarStyles = styles;
export const alphaCalendarShadowOptions = shadowOptions;
