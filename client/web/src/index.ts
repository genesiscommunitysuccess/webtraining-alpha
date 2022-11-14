import { baseComponents } from './base-components';
import { provideDesignSystem } from './provide-design-system';

export { baseComponents, provideDesignSystem };

export const registerBootcampDesignSystem = () => provideDesignSystem().register(
    baseComponents,
);

export * from './_config';

export * from './main/index';