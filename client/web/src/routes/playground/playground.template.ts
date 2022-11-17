import {html, repeat} from '@microsoft/fast-element';
import type {MarketdataComponent} from './playground';

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
