import {
  defaultTextFieldConfig,
  foundationTextFieldShadowOptions,
  TextField as FoundationTextField,
} from '@genesislcap/foundation-ui';
import {alphaTextFieldTemplate as template} from './text-field.template';
import {alphaTextFieldStyles as styles} from './text-field.styles';

export class TextField extends FoundationTextField {}

export const alphaTextField = TextField.compose({
  baseName: 'text-field',
  template,
  styles,
  shadowOptions: foundationTextFieldShadowOptions,
  ...defaultTextFieldConfig,
});
