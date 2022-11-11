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
<//zero-card>
`;