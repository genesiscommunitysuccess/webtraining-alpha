import { foundationButtonStyles } from '@genesislcap/foundation-ui';
import { css, ElementStyles } from '@microsoft/fast-element';
import { zeroButtonStyles as buttonStyles } from '@genesislcap/foundation-zero/dist/esm/button/button.styles'
import type { ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

const baseStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition,
): ElementStyles => css`
  ${buttonStyles(context, definition)}
  :host {
    transition: all 0.25s ease 0s;
    height: auto;
    min-width: auto;
    padding: 0.4rem 1rem;
    background-color: #4CAF50;
  }
`;

export const zeroButtonStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition,
): ElementStyles => css`
  ${foundationButtonStyles(context, definition)}
  ${baseStyles(context, definition)}
`;