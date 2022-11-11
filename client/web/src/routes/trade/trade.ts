import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {TradeTemplate as template} from './trade.template';
import {TradeStyles as styles} from './trade.styles';
import {Connect} from '@genesislcap/foundation-comms';

const name = 'trade-route';

@customElement({
  name,
  template,
  styles,
})
export class Trade extends FASTElement {
    @Connect connect: Connect;

    @observable public counterparty: string;
    @observable public instrument: string;
    @observable public symbol: string;
    @observable public quantity: number;
    @observable public price: number;
    @observable public direction: string;
    @observable public status: string;

    @observable public allCounterparties: Array<{value: string, label: string}>; //add this property
    @observable public allInstruments: Array<{value: string, label: string}>; //add this property

    @observable public serverResponse;

    constructor() {
        super();
    }

    public async connectedCallback() { //add this method to Trade class
        super.connectedCallback(); //FASTElement implementation

        const msgC = await this.connect.snapshot('ALL_COUNTERPARTIES'); //get a snapshot of data from ALL_COUNTERPARTIES data server
        this.allCounterparties = msgC.ROW?.map(counterparty => ({
          value: counterparty.COUNTERPARTY_ID, label: counterparty.COUNTERPARTY_NAME}));
        
        const msgI = await this.connect.snapshot('ALL_INSTRUMENTS'); //get a snapshot of data from ALL_INTRUMENTS data server
        this.allInstruments = msgI.ROW?.map(instrument => ({
          value: instrument.INSTRUMENT_ID, label: instrument.INSTRUMENT_NAME}));
    }    

    public async insertTrade() {
        this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
          DETAILS: {
            TRADE_ID: Date.now(), 
            COUNTERPARTY_ID: this.counterparty,
            INSTRUMENT_ID: this.instrument,
            SYMBOL: this.symbol,
            QUANTITY: this.quantity,
            PRICE: this.price,
            DIRECTION: this.direction,
            TRADE_STATUS: this.status
          },
        });
        console.log(this.serverResponse);
    
        if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
          const errorMsg = this.serverResponse.ERROR[0].TEXT;
          alert(errorMsg);
        } else {
          alert("Trade inserted successfully.")
        }
    }
}