import { FASTElement, customElement, html, observable, repeat, css } from "@microsoft/fast-element";
import {Connect} from '@genesislcap/foundation-comms';

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
        Instrument from static Array &nbsp;
        <span class="instrument-name">${x => x}</span>&nbsp;
        <span class="instrument-price">${(x, c) => c.parent.getLastPriceRealTime(x)}</span>
      </li>
    `, { positioning: true })}

    ${repeat(x => x.allInstruments, html<{name: any, price: any}>`
      <li>
        Instrument from Server Resources&nbsp;
        <span class="instrument-name">${x => x.name}</span>&nbsp;
        <span class="instrument-price">${x => x.price}</span>
      </li>
    `, { positioning: true })}
    </ul>
  </div>
`;

@customElement({name: "marketdata-component", template: myTemplate, styles: marketdataComponentCSS}) // custom element being created
export class MarketdataComponent extends FASTElement {
    @Connect connect: Connect;

    @observable instruments: String[] = ["MSFT", "AAPL"];
    @observable lastPrices: number[] = [101.23, 227.12];

    @observable public allInstruments: Array<{name: any, price: any}>; //add this property

    public async connectedCallback() { //add this method to Order class
      super.connectedCallback(); //FASTElement implementation

      const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); //get a snapshot of data from ALL_INTRUMENTS data server
      console.log("msg"); //add this to look into the data returned and understand its structure

      console.log(this.getPMarketData("1"));
      console.log(this.getPMarketData("2"));

      this.allInstruments = msg.ROW?.map(instrument => ({
        name: instrument.INSTRUMENT_NAME, price: this.getMarketData(instrument.INSTRUMENT_ID).then(x => x)}));
    }

    public getLastPriceRealTime(instrumentName: string) {
        let instrumentIndex = this.instruments.indexOf(instrumentName);
        return this.lastPrices[instrumentIndex];
    }

    public async getMarketData(instrumentId: string) {
      const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
        REQUEST: {
          INSTRUMENT_ID: instrumentId,
        }});
      console.log(msg);
  
      return msg.REPLY[0]?.LAST_PRICE;
    }

    public getPMarketData(instrumentId: string) : string {
      var lastPrice = "222";
      var promisseMktData = Promise.resolve(
        this.connect.request('INSTRUMENT_MARKET_DATA', {
          REQUEST: {
            INSTRUMENT_ID: instrumentId,
          }})
      );

      promisseMktData.then( function(value) {
        console.log("Deu certo a promessa! Valor é ..", value.REPLY[0]?.LAST_PRICE);
        lastPrice = value.REPLY[0]?.LAST_PRICE;
      });

      return lastPrice;

      promisseMktData.catch( function(reason) {
        console.log("Nao vou manter minha promessa :( ...", reason);
        return 0;
      });
    }
}