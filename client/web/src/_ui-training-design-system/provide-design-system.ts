import {createDesignSystemProxy, provideTokens} from '@genesislcap/foundation-ui';
import {DesignSystem} from '@microsoft/fast-foundation';

import * as tokens from './_config/tokens';
import * as values from './_config/values';

/**
 * Provides a design system for the specified element either by returning one that was
 * already created for that element or creating one.
 * @param element - The element to root the design system at. By default, this is the body.
 * @returns alpha Design System
 * @public
 */
export const provideDesignSystem = (
  element?: HTMLElement,
  prefix = 'ui-training',
): Pick<DesignSystem, 'register'> => {
  if (element) {
    provideTokens(tokens, values, element);
  }
  const alphaDesignSystem = DesignSystem.getOrCreate(element).withPrefix(prefix);
  return createDesignSystemProxy(alphaDesignSystem);
};
