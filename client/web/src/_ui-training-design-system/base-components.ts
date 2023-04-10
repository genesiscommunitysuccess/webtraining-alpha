import {designSystemProvider} from './design-system-provider';
import {alphaAccordion} from './accordion';
import {alphaAccordionItem} from './accordion-item';
import {alphaActionsMenu} from './actions-menu';
import {alphaAnchor} from './anchor';
import {alphaAnchoredRegion} from './anchored-region';
import {alphaAvatar} from './avatar';
import {alphaBadge} from './badge';
import {alphaBreadcrumb} from './breadcrumb';
import {alphaBreadcrumbItem} from './breadcrumb-item';
import {alphaButton} from './button';
import {alphaCalendar} from './calendar';
import {alphaCard} from './card';
import {alphaCheckbox} from './checkbox';
import {alphaCombobox} from './combobox';
import {alphaDataGrid} from './data-grid';
import {alphaDataGridCell} from './data-grid-cell';
import {alphaDataGridRow} from './data-grid-row';
import {alphaDatePicker} from './date-picker';
import {alphaDialog} from './dialog';
import {alphaDisclosure} from './disclosure';
import {alphaDivider} from './divider';
import {alphaErrorBoundary} from './error-boundary';
import {alphaFilter} from './filter';
import {alphaFilterBar} from './filter-bar';
import {alphaFlipper} from './flipper';
import {alphaFlyout} from './flyout';
import {alphaHorizontalScroll} from './horizontal-scroll';
import {alphaIcon} from './icon';
import {alphaListbox} from './listbox';
import {alphaListboxOption} from './listbox-option';
import {alphaMenu} from './menu';
import {alphaMenuItem} from './menu-item';
import {alphaModal} from './modal';
import {alphaMultiselect} from './multiselect';
import {alphaNumberField} from './number-field';
import {alphaPicker} from './picker';
import {alphaProgress} from './progress';
import {alphaProgressRing} from './progress-ring';
import {alphaRadio} from './radio';
import {alphaRadioGroup} from './radio-group';
import {alphaSearch} from './search';
import {alphaSegmentedControl} from './segmented-control';
import {alphaSegmentedItem} from './segmented-item';
import {alphaSelect} from './select';
import {alphaSkeleton} from './skeleton';
import {alphaSlider} from './slider';
import {alphaSliderLabel} from './slider-label';
import {alphaSwitch} from './switch';
import {alphaTab} from './tab';
import {alphaTabPanel} from './tab-panel';
import {alphaTabs} from './tabs';
import {alphaTextArea} from './text-area';
import {alphaTextField} from './text-field';
import {alphaToast} from './toast';
import {alphaToolbar} from './toolbar';
import {alphaTooltip} from './tooltip';
import {alphaTreeItem} from './tree-item';
import {alphaTreeView} from './tree-view';
import {alphaUrlInput} from './url-input';

import type {Container} from '@microsoft/fast-foundation';

export const baseComponents = {
  designSystemProvider,
  alphaAccordion,
  alphaAccordionItem,
  alphaActionsMenu,
  alphaAnchor,
  alphaAnchoredRegion,
  alphaAvatar,
  alphaBadge,
  alphaBreadcrumb,
  alphaBreadcrumbItem,
  alphaButton,
  alphaCalendar,
  alphaCard,
  alphaCheckbox,
  alphaCombobox,
  alphaDataGrid,
  alphaDataGridCell,
  alphaDataGridRow,
  alphaDatePicker,
  alphaDialog,
  alphaDisclosure,
  alphaDivider,
  alphaErrorBoundary,
  alphaFilter,
  alphaFilterBar,
  alphaFlipper,
  alphaFlyout,
  alphaHorizontalScroll,
  alphaIcon,
  alphaListbox,
  alphaListboxOption,
  alphaMenu,
  alphaMenuItem,
  alphaModal,
  alphaMultiselect,
  alphaNumberField,
  alphaPicker,
  alphaProgress,
  alphaProgressRing,
  alphaRadio,
  alphaRadioGroup,
  alphaSearch,
  alphaSegmentedControl,
  alphaSegmentedItem,
  alphaSelect,
  alphaSkeleton,
  alphaSlider,
  alphaSliderLabel,
  alphaSwitch,
  alphaTab,
  alphaTabPanel,
  alphaTabs,
  alphaTextArea,
  alphaTextField,
  alphaToast,
  alphaToolbar,
  alphaTooltip,
  alphaTreeItem,
  alphaTreeView,
  alphaUrlInput,
  register(container?: Container, ...rest: any[]) {
    if (!container) {
      // preserve backward compatibility with code that loops through
      // the values of this object and calls them as funcs with no args
      return;
    }

    for (const key in this) {
      if (key === 'register') {
        continue;
      }

      this[key]().register(container, ...rest);
    }
  },
};
