import {html, repeat} from '@microsoft/fast-element';
import type {OrdersAgGrid} from './ordersaggrid';
import {ordersaggridColumnDefs} from './ordersaggridColumnDefs';

export const OrdersAgGridTemplate = html<OrdersAgGrid>`
<zero-card>
    adsalkdlaskdlsa
    <zero-grid-pro>
        <grid-pro-genesis-datasource
            resourceName="ALL_ORDERS"
            orderBy="ORDER_ID">
        </grid-pro-genesis-datasource>
        ${repeat(() => ordersaggridColumnDefs, html`
        <grid-pro-column :definition="${x => x}" />
        `)}
    </zero-grid-pro>
</zero-card>
`;
