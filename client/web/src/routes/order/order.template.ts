import {html, repeat, when} from '@microsoft/fast-element';
import type {Order} from './order';
import {sync} from '@genesislcap/foundation-utils';
import {orderColumnDefs} from './orderColumnDefs';
import {OrderStyles} from './order.styles';

export const OrderTemplate = html<Order>`
<zero-card>
  <div>
    <span class='${x => x.instrumentClass}'>Instrument</span>
    <zero-select :value=${sync(x=> x.instrument)} @change=${x => x.getMarketData()}>
      <zero-option :selected=${sync(x => x.instrument==undefined)}>-- Select --</zero-option>
      ${repeat(x => x.allInstruments, html`
        <zero-option value=${x => x.value}>${x => x.label}</zero-option>
      `)}
    </zero-select>
    <span>Last price is ${x => x.lastPrice ? x.lastPrice : 'N/A'}</span>
  </div>
  <div>
    <!-- 
    <zero-text-field required :value=${sync(x=> x.quantity)}>Quantity</zero-text-field>
    <zero-text-field :value=${sync(x=> x.price)}>Price</zero-text-field>
    -->
    <ui-training-design-system-provider>
      <ui-training-text-field required :value=${sync(x=> x.quantity)}><span class='${x => x.quantityClass}'>Quantity</span></ui-training-text-field>
      <ui-training-text-field :value=${sync(x=> x.price)}><span class='${x => x.priceClass}'>Price</span></ui-training-text-field>
    </ui-training-design-system-provider>
  </div>
  <div>
    <span>Total: ${x => x.quantity * x.price}</span>
  </div>
  <div>
    <span>Direction</span>
    <zero-select :value=${sync(x=> x.direction)}>
      ${repeat(x => x.directionOptions, html`
        <zero-option value=${x => x.value}>${x => x.label}</zero-option>
      `)}
    </zero-select>
    </div>
  <div>
    <zero-text-area :value=${sync(x=> x.notes)}>Notes</zero-text-area>
  </div>
  <div>
    <!-- <zero-button @click=${x=> x.insertOrder()}>Add Order</zero-button> -->
    <ui-training-design-system-provider>
      <ui-training-button appearance="training-green" @click=${x=> x.insertOrder()}>Add Order<//ui-training-button>
    </ui-training-design-system-provider>
  </div>
  <div>
    <zero-text-field :value=${sync(x=> x.minimumQuantity)}>Minimum Quantity Displayed</zero-text-field>
  </div>  
  <zero-grid-pro rowHeight="20" persist-column-state-key='order-grid-settings'>
      <slotted-styles :styles=${() => OrderStyles}></slotted-styles>
      <grid-pro-genesis-datasource
      resource-name="ALL_ORDERS"
          order-by="ORDER_ID"
          criteria="QUANTITY >= ${x=>x.minimumQuantity}">
      </grid-pro-genesis-datasource>
      ${repeat(() => orderColumnDefs, html`
      <grid-pro-column :definition="${x => x}" />
      `)}
      <grid-pro-column :definition="${x => x.singleOrderActionColDef}" />
      <grid-pro-column :definition="${x => x.cancelOrderActionColDef}" />
  </zero-grid-pro>
  ${when(x => x.serverResponse, html`
  <span>${x=> x.serverResponse.MESSAGE_TYPE == 'EVENT_ACK' ?
    'Successfully added trade' : 'Something went wrong'}
  </span>
  `)}
</zero-card>
`;
