import {html, repeat, when} from '@microsoft/fast-element';
import type {Trade} from './trade';
import { sync } from '@genesislcap/foundation-utils';
import {tradeColumnDefs} from './tradeColumnDefs';

export const TradeTemplate = html<Trade>`
<zero-card>
  <div>
    <span>Counterparty</span>
    <zero-select :value=${sync(x=> x.counterparty)}>
      <zero-option :selected=${sync(x => x.counterparty==undefined)}>-- Select --</zero-option>
      ${repeat(x => x.allCounterparties, html`
        <zero-option value=${x => x.value}>${x => x.label}</zero-option>
      `)}
    </zero-select>
  </div>
  <div>
    <span>Instrument</span>
    <zero-select :value=${sync(x=> x.instrument)}>
      <zero-option :selected=${sync(x => x.instrument==undefined)}>-- Select --</zero-option>
      ${repeat(x => x.allInstruments, html`
        <zero-option value=${x => x.value}>${x => x.label}</zero-option>
      `)}
    </zero-select>
  </div>
  <div>
    <zero-text-field required :value=${sync(x=> x.quantity)}>Quantity</zero-text-field>
    <zero-text-field :value=${sync(x=> x.price)}>Price</zero-text-field>
  </div>
  <div>
    <zero-text-field :value=${sync(x=> x.symbol)}>Symbol</zero-text-field>
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
    <span>Status</span>
    <zero-select :value=${sync(x=> x.status)}>
      ${repeat(x => x.statusOptions, html`
        <zero-option value=${x => x.value}>${x => x.label}</zero-option>
      `)}
    </zero-select>
  </div>
  <div>
    <zero-button @click=${x=> x.insertTrade()}>Add Trade</zero-button>
  </div>
  <zero-grid-pro rowHeight="20" persist-column-state-key='trade-grid-settings'>
      <grid-pro-genesis-datasource
          resourceName="ALL_TRADES"
          orderBy="TRADE_ID">
      </grid-pro-genesis-datasource>
      ${repeat(() => tradeColumnDefs, html`
      <grid-pro-column :definition="${x => x}" />
      `)}
  </zero-grid-pro>
  ${when(x => x.serverResponse, html`
  <span>${x=> x.serverResponse.MESSAGE_TYPE == 'EVENT_ACK' ?
    'Successfully added trade' : 'Something went wrong'}
  </span>
  `)}
</zero-card>
`;