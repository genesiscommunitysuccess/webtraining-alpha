import {provideTokens} from '@genesislcap/foundation-ui';
import {DesignSystemProvider as FASTDesignSystemProvider} from '@microsoft/fast-components';
import {html} from '@microsoft/fast-element';

import * as tokens from '../_config/tokens';
import * as values from '../_config/values';

export class DesignSystemProvider extends FASTDesignSystemProvider {
  constructor() {
    super();
    provideTokens(tokens, values, this);
  }
}

export const designSystemProvider = DesignSystemProvider.compose({
  baseName: 'design-system-provider',
  template: html`
    <slot></slot>
  `,
});
