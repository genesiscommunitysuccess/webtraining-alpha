import {fastListbox} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastListbox);

export const alphaListbox = () => fastListbox();

export {Listbox} from '@microsoft/fast-components';

export const defaultListboxConfig = defaultConfig;
export const alphaListboxTemplate = template;
export const alphaListboxStyles = styles;
export const alphaListboxShadowOptions = shadowOptions;
