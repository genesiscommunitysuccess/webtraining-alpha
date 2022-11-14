import {Button as FoundationButton, defaultButtonConfig, foundationButtonShadowOptions} from '@genesislcap/foundation-ui';
import {zeroButtonTemplate as template} from './button.template';
import {zeroButtonStyles as styles} from './button.styles';

export class Button extends FoundationButton { }

export const zeroButton = Button.compose({
  baseName: 'button',
  template,
  styles,
  shadowOptions: foundationButtonShadowOptions,
  ...defaultButtonConfig,
});