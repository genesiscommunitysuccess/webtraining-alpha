import { FASTElement, customElement, html, observable, repeat, css } from "@microsoft/fast-element";

const marketdataComponentCSS = css`
  h4 {
    color: #00ffff;
  }
  .instrument-name {
    color: #00ffff;
  }
  .instrument-price {
    color: #00ff6a;
  }  
`;

const myTemplate = html<MarketdataComponent>`
  <div class="header">
    <h3>My marketdata component</h3>
    <ul>
    ${repeat(x => x.instruments, html<string>`
      <li>
        Instrument &nbsp;
        <span class="instrument-name">${x => x}</span>&nbsp;
        <span class="instrument-price">${(x, c) => c.parent.getLastPriceRealTime(x)}</span>
      </li>
    `, { positioning: true })}
    </ul>
  </div>
`;

@customElement({name: "marketdata-component", template: myTemplate, styles: marketdataComponentCSS}) // custom element being created
export class MarketdataComponent extends FASTElement {
    @observable instruments: String[] = ["MSFT", "AAPL"];
    @observable lastPrices: number[] = [101.23, 227.12];

    public getLastPriceRealTime(instrumentName: string) {
        let instrumentIndex = this.instruments.indexOf(instrumentName);
        return this.lastPrices[instrumentIndex];
    }
}