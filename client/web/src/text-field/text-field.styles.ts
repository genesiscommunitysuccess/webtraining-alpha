import { foundationTextFieldStyles  } from '@genesislcap/foundation-ui';
import { css, ElementStyles } from '@microsoft/fast-element';
import { zeroTextFieldStyles as textFieldStyles } from '@genesislcap/foundation-zero/dist/esm/text-field/text-field.styles'
import type { ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

const baseStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition,
): ElementStyles => css`
  ${textFieldStyles(context, definition)}
  :host {
    display: flex;
    width: 20%;
    flex-direction: column;
    caret-color : #3107ba;
    color: #3107ba;
  }

  :host .root {
    width: 100%;
  }
`;

export const zeroTextFieldStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition,
): ElementStyles => css`
  ${foundationTextFieldStyles(context, definition)}
  ${baseStyles(context, definition)}
`;