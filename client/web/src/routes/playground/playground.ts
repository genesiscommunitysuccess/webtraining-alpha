import {Connect} from '@genesislcap/foundation-comms';
import { ZeroGridPro } from '@genesislcap/foundation-zero-grid-pro';
import {css, customElement, FASTElement, observable} from '@microsoft/fast-element';
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

    public jsonGrid!: ZeroGridPro;

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

    public async callExternalAPI() {
      let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
      let response = await fetch(url);

      let commits = await response.json();
      console.log(commits[0]);
      window.alert("Author of the first commit is " + commits[0].author.login);
    }

    public async loadGridData() {
      let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
      let response = await fetch(url);
      let commits = await response.json();
      
      const rowData = [];
      commits.forEach(c => rowData.push({login:c.author.login, 
        id:c.author.id, 
        type:c.author.type}));

      const columnDefs = [
        {field: 'login'},
        {field: 'id'},
        {field: 'type'},
      ];

      const gridOptions = {
        defaultColDef: {
          resizable: true,
          filter: true,
        },
        columnDefs,
        rowData,
      };

      this.jsonGrid.gridOptions = gridOptions;
    }
}
