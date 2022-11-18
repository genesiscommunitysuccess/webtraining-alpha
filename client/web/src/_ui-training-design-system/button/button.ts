import {
  Button as FoundationButton,
  defaultButtonConfig,
  foundationButtonShadowOptions,
} from '@genesislcap/foundation-ui';
import {alphaButtonTemplate as template} from './button.template';
import {alphaButtonStyles as styles} from './button.styles';

export class Button extends FoundationButton {}

export const alphaButton = Button.compose({
  baseName: 'button',
  template,
  styles,
  shadowOptions: foundationButtonShadowOptions,
  ...defaultButtonConfig,
});
