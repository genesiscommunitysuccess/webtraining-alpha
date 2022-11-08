import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {OrderTemplate as template} from './order.template';
import {OrderStyles as styles} from './order.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {logger} from '../../utils';

const name = 'order-route';

@customElement({
  name,
  template,
  styles,
})
export class Order extends FASTElement {
  @Connect connect: Connect;

  @observable public instrument: string;
  @observable public lastPrice: number;
  @observable public quantity: number;
  @observable public price: number;
  @observable public side: string;
  @observable public notes: string;

  @observable public allInstruments: Array<{value: string, label: string}>; //add this property
  @observable public sideOptions: Array<{value: string, label: string}>; //add this property

  @observable public serverResponse;

  constructor() {
    super();
  }

  public async connectedCallback() { //add this method to Order class
    super.connectedCallback(); //FASTElement implementation

    const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); //get a snapshot of data from ALL_INTRUMENTS data server
    console.log(msg); //add this to look into the data returned and understand its structure
    this.allInstruments = msg.ROW?.map(instrument => ({
      value: instrument.INSTRUMENT_ID, label: instrument.INSTRUMENT_NAME}));

    const metadata = await this.connect.getMetadata('ALL_ORDERS');
    console.log(metadata);
    const sideField = metadata.FIELD?.find(field => field.NAME == 'DIRECTION');
    this.sideOptions = Array.from(sideField.VALID_VALUES).map(v => ({value: v, label: v}));
  }

  public async insertOrder() {
    this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
      DETAILS: {
        ORDER_ID: this.getGUID(),
        INSTRUMENT_ID: this.instrument,
        QUANTITY: this.quantity,
        PRICE: this.price,
        SIDE: this.side,
        NOTES: this.notes,
      },
    });
    console.log(this.serverResponse);

    if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
      const errorMsg = this.serverResponse.ERROR[0].TEXT;
      alert(errorMsg);
    } else {
      alert("Order inserted successfully.")
    }
  }

  public async getMarketData() {
    const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
      REQUEST: {
        INSTRUMENT_ID: this.instrument,
      }});
    console.log(msg);

    this.lastPrice = msg.REPLY[0].LAST_PRICE;
  }

  private getGUID(): string {
    let d = new Date().getTime();
    const guid = "RNDxxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
  }
}
