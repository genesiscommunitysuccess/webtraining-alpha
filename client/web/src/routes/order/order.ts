import {customElement, FASTElement, observable, attr} from '@microsoft/fast-element';
import {OrderTemplate as template} from './order.template';
import {OrderStyles as styles} from './order.styles';
import {Connect} from '@genesislcap/foundation-comms';

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
  @observable public direction: string;
  @observable public notes: string;

  @observable public instrumentClass: string;
  @observable public quantityClass: string;
  @observable public priceClass: string;

  @attr public minimumQuantity: number;

  @observable public allInstruments: Array<{value: string, label: string}>; // add this property
  @observable public directionOptions: Array<{value: string, label: string}>; // add this property

  @observable public serverResponse;

  constructor() {
    super();
  }

  public async connectedCallback() { // add this method to Order class
    super.connectedCallback(); // FASTElement implementation

    this.minimumQuantity = 0;

    const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); // get a snapshot of data from ALL_INTRUMENTS data server
    console.log(msg); // add this to look into the data returned and understand its structure
    this.allInstruments = msg.ROW?.map(instrument => ({
      value: instrument.INSTRUMENT_ID, label: instrument.INSTRUMENT_NAME}));

    const metadata = await this.connect.getMetadata('ALL_ORDERS');
    console.log(metadata);
    const directionField = metadata.FIELD?.find(field => field.NAME == 'DIRECTION');
    this.directionOptions = Array.from(directionField.VALID_VALUES).map(v => ({value: v, label: v}));
  }

  public async insertOrder() {
    this.instrumentClass = "";
    this.quantityClass = "";
    this.priceClass = "";

    this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
      DETAILS: {
        ORDER_ID: Date.now(),
        INSTRUMENT_ID: this.instrument,
        QUANTITY: this.quantity,
        PRICE: this.price,
        DIRECTION: this.direction,
        NOTES: this.notes,
      },
    });
    console.log("serverResponse: ", this.serverResponse);

    if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
      const error = this.serverResponse.ERROR[0];
      alert(error.TEXT);
      switch (error.FIELD) {
        case "INSTRUMENT_ID":
          this.instrumentClass = 'required-yes';
          break;
      
        case "QUANTITY":
          this.quantityClass = 'required-yes';
          break;

        case "PRICE":
          this.priceClass = 'required-yes';
          break;
          
        default:
          console.log("FIELD not found: ", error.FIELD);
      }
      
    } else {
      alert('Order inserted successfully.');
    }
  }

  public async getMarketData() {
    this.lastPrice = null;
    const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
      REQUEST: {
        INSTRUMENT_ID: this.instrument,
      }});
    console.log(msg);

    this.lastPrice = msg.REPLY[0].LAST_PRICE;
  }

  public singleOrderActionColDef = {
    headerName: 'Action',
    minWidth: 150,
    maxWidth: 150,
    cellRenderer: 'action',
    cellRendererParams: {
      actionClick: async (rowData) => {
        console.log(rowData);
      },
      actionName: 'Print Order',
      appearance: 'primary-gradient',
    },
    pinned: 'right',
  };

  public cancelOrderActionColDef = {
    headerName: 'Cancel',
    minWidth: 150,
    maxWidth: 150,
    cellRenderer: 'action',
    cellRendererParams: {
      actionClick: async (rowData) => {
        this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_CANCEL', {
          DETAILS: {
            ORDER_ID: rowData.ORDER_ID,
            INSTRUMENT_ID: rowData.INSTRUMENT_ID,
            QUANTITY: rowData.QUANTITY,
            PRICE: rowData.PRICE,
            DIRECTION: rowData.direction,
            NOTES: rowData.NOTES,
          },
        });
        console.log(this.serverResponse);

        if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
          const errorMsg = this.serverResponse.ERROR[0].TEXT;
          alert(errorMsg);
        } else {
          alert('Order canceled successfully.');
        }
      },
      actionName: 'Cancel Order',
      appearance: 'primary-gradient',
    },
    pinned: 'right',
  };
}
