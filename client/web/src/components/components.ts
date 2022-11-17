import {EntityManagement} from '@genesislcap/foundation-entity-management';
import {allComponents, provideFASTDesignSystem} from '@microsoft/fast-components';
import {FASTRouter} from '@microsoft/fast-router';
import {baseComponents as allAlhaComponents, provideDesignSystem as provideAlphaDesignSystem} from '../_ui-training-design-system';

// Loads FAST Design System
provideFASTDesignSystem().register(allComponents);

// Loads UI Training Design System (ui-training)
provideAlphaDesignSystem().register(allAlhaComponents);

export async function loadZeroAsync() {
  const {baseComponents, provideDesignSystem} = await import('@genesislcap/foundation-zero');
  const {zeroGridComponents} = await import('@genesislcap/foundation-zero-grid-pro');

  provideDesignSystem().register(baseComponents, zeroGridComponents);
}

EntityManagement;
FASTRouter;
