import { TextField as FoundationTextField, defaultTextFieldConfig, foundationTextFieldShadowOptions, foundationTextFieldTemplate as template } from '@genesislcap/foundation-ui';
import { zeroTextFieldStyles as styles } from './text-field.styles';

export class TextField extends FoundationTextField { }

export const zeroTextField = TextField.compose({
    baseName: 'text-field',
    template,
    styles,
    shadowOptions: foundationTextFieldShadowOptions,
    ...defaultTextFieldConfig,
});