import {html, ref, repeat} from '@microsoft/fast-element';
import type {MarketdataComponent} from './playground';
import { zeroGridProTemplate } from '@genesislcap/foundation-zero-grid-pro';

export const marketDataComponent = html<MarketdataComponent>`
  <div class="header">
    <h3>My marketdata component</h3>
    <ul>
    ${repeat(x => x.instruments, html<string>`
      <li>
        Instrument from static Array &nbsp;
        <span class="instrument-name">${x => x}</span>&nbsp;
        <span class="instrument-price">${(x, c) => c.parent.getLastPriceRealTime(x)}</span>
      </li>
    `, {positioning: true})}

    ${repeat(x => x.allInstruments, html<{name: any, price: any}>`
      <li>
        Instrument from Server Resources&nbsp;
        <span class="instrument-name">${x => x.name}</span>&nbsp;
        <span class="instrument-price">${x => x.price}</span>
      </li>
    `, {positioning: true})}
    </ul>

    <zero-button @click=${x=> x.callExternalAPI()}>Call external API</zero-button>

    <zero-button @click=${x=> x.loadGridData()}>Load grid data from external API</zero-button>

    <div class="top-layout">
        <zero-card class="positions-card">
            <span class="card-title">Data from API</span>
            <zero-grid-pro ${ref('jsonGrid')} rowHeight="45" style="height:300px;display:block">
                
            </zero-grid-pro>
        </zero-card>
    </div>
    
    <!--
    <ui-training-design-system-provider>
      <ui-training-button appearance="training-green">UI Training Design System Button</ui-training-button>
    </ui-training-design-system-provider>

    <zero-design-system-provider>
      <zero-button appearance="primary-gradient">Zero Design System Button</zero-button>
    </zero-design-system-provider>
    -->
  </div>
`;
