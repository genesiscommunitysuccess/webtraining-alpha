import {fastAccordionItem} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAccordionItem);

export const alphaAccordionItem = () => fastAccordionItem();

export {AccordionItem} from '@microsoft/fast-components';

export const defaultAccordionItemConfig = defaultConfig;
export const alphaAccordionItemTemplate = template;
export const alphaAccordionItemStyles = styles;
export const alphaAccordionItemShadowOptions = shadowOptions;
