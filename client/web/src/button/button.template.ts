import {foundationButtonTemplate} from '@genesislcap/foundation-ui';
import type {ViewTemplate} from '@microsoft/fast-element';
import type {ElementDefinitionContext, FoundationElementDefinition} from '@microsoft/fast-foundation';
import type {Button} from './button';

export const zeroButtonTemplate = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
): ViewTemplate<Button> => foundationButtonTemplate(context, definition);