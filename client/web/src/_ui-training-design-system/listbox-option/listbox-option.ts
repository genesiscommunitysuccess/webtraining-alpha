import {foundationListboxOption} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationListboxOption);

export const alphaListboxOption = () => foundationListboxOption();

export {ListboxOption} from '@genesislcap/foundation-ui';

export const defaultListboxOptionConfig = defaultConfig;
export const alphaListboxOptionTemplate = template;
export const alphaListboxOptionStyles = styles;
export const alphaListboxOptionShadowOptions = shadowOptions;
