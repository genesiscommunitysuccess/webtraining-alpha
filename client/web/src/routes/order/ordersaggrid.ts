import {ZeroGridPro, zeroGridProTemplate} from '@genesislcap/foundation-zero-grid-pro';
import {customElement} from '@microsoft/fast-element';
import {positionsGridStyles} from './grid-pro.styles';

@customElement({
  name: 'positions-grid-pro',
  template: zeroGridProTemplate,
  styles: positionsGridStyles,
})
export class OrdersAgGrid extends ZeroGridPro {
}