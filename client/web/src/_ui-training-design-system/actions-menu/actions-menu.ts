import {foundationActionsMenu} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationActionsMenu);

export const alphaActionsMenu = () => foundationActionsMenu();

export {ActionsMenu} from '@genesislcap/foundation-ui';

export const defaultActionsMenuConfig = defaultConfig;
export const alphaActionsMenuTemplate = template;
export const alphaActionsMenuStyles = styles;
export const alphaActionsMenuShadowOptions = shadowOptions;
