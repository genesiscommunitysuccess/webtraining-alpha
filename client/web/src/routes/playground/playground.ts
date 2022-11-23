import {Connect} from '@genesislcap/foundation-comms';
import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {marketdataComponentCSS} from './playground.styles';
import {marketDataComponent} from './playground.template';

const msftPrice = 101.23;
const aaplPrice = 227.12;

@customElement({
  name: 'marketdata-component',
  template: marketDataComponent,
  styles: marketdataComponentCSS
})
export class MarketdataComponent extends FASTElement {
    @Connect connect: Connect;

    @observable instruments: String[] = ['MSFT', 'AAPL'];
    @observable lastPrices: number[] = [msftPrice, aaplPrice];

    @observable public allInstruments: Array<{id: any, name: any, price: any}> = []; // add this property

    public async connectedCallback() { // add this method to Order class
      super.connectedCallback(); // FASTElement implementation

      await this.setAllAllInstruments();
    }

    public getLastPriceRealTime(instrumentName: string) {
      const instrumentIndex = this.instruments.indexOf(instrumentName);
      return this.lastPrices[instrumentIndex];
    }

    public async getMarketDataLastPrice(instrumentId: string) {
      const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
        REQUEST: {
          INSTRUMENT_ID: instrumentId,
        }});
      console.log(msg);

      return msg.REPLY[0] ? msg.REPLY[0].LAST_PRICE : 'N/A';
    }

    private async setAllAllInstruments() {
      const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); // get a snapshot of data from ALL_INTRUMENTS data server
      msg.ROW.forEach((instrument) => {
        this.getMarketDataLastPrice(instrument.INSTRUMENT_ID).then( (price) => {
          this.allInstruments.push({id: instrument.INSTRUMENT_ID, name: instrument.INSTRUMENT_NAME, price: price});
        });
      });
    }
}
