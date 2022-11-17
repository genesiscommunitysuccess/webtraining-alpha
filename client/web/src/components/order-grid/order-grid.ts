import {ZeroGridPro, zeroGridProTemplate} from '@genesislcap/foundation-zero-grid-pro';
import {customElement} from '@microsoft/fast-element';
import {positionsGridStyles} from './order-grid.styles';

@customElement({
  name: 'order-grid',
  template: zeroGridProTemplate,
  styles: positionsGridStyles,
})
export class OrdersAgGrid extends ZeroGridPro { }
