import {customElement, FASTElement, html, css, repeat} from '@microsoft/fast-element';
import { OrdersAgGrid } from '../../components/order-grid/order-grid';
import { ordersaggridColumnDefs } from '../../components/order-grid/ordersaggridColumnDefs';

const name = 'custom-order-page';

OrdersAgGrid;

@customElement({
  name,
  template: html`
    <zero-card>
      <order-grid>
        <grid-pro-genesis-datasource
          resource-name="ALL_ORDERS"
          order-by="ORDER_ID">
        </grid-pro-genesis-datasource>
        ${repeat(() => ordersaggridColumnDefs, html`
          <grid-pro-column :definition="${x => x}"></grid-pro-column>
        `)}
      </order-grid>
    </zero-card>
  `,
  styles: css``,
})
export class CustomOrderPage extends FASTElement { }
