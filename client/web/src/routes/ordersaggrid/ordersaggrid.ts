import {ZeroGridPro, zeroGridProTemplate} from '@genesislcap/foundation-zero-grid-pro';
import {customElement} from '@microsoft/fast-element';
import {positionsGridStyles} from './ordersaggrid.styles';

const name = 'ordersaggrid-route';

@customElement({
  name: 'positions-grid-pro',
  template: zeroGridProTemplate,
  styles: positionsGridStyles,
})
export class OrdersAgGrid extends ZeroGridPro {
  constructor() {
    super();
  }

  public async connectedCallback() {
    super.connectedCallback();
  }
}
