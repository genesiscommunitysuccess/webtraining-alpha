import { foundationDropdownMenu } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationDropdownMenu
);

export const alphaDropdownMenu = () => foundationDropdownMenu();

export { DropdownMenu } from '@genesislcap/foundation-ui';

export const defaultDropdownMenuConfig = defaultConfig;
export const alphaDropdownMenuTemplate = template;
export const alphaDropdownMenuStyles = styles;
export const alphaDropdownMenuShadowOptions = shadowOptions;
