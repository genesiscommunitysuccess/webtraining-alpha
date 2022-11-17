import {foundationButtonStyles} from '@genesislcap/foundation-ui';
import {css, ElementStyles} from '@microsoft/fast-element';
import type {
  ElementDefinitionContext,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import {appearanceBehavior} from '../utils';
import {TrainingExampleColorHEX} from '../_common';

const zeroTrainingGreenStyles = css`
  :host([appearance='training-green']) {
    transition: all 0.25s ease 0s;
    height: auto;
    min-width: auto;
    padding: 0.4rem 1rem;
    background: ${TrainingExampleColorHEX.green};
  }
`;

const baseStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
): ElementStyles => css`
  :host {
    margin: 5px;
  }
`;

export const alphaButtonStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
): ElementStyles =>
  css`
    ${foundationButtonStyles(context, definition)}
    ${baseStyles(context, definition)}
  `.withBehaviors(
    appearanceBehavior('training-green', zeroTrainingGreenStyles),
  );
