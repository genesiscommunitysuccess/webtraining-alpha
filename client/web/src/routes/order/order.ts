import {customElement, FASTElement} from '@microsoft/fast-element';
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

  constructor() {
    super();
  }

  public async insertOrder(event) {
    const formData = event.detail;
    const insertOrderEvent = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
      DETAILS: {
        INSTRUMENT_ID: formData.INSTRUMENT_ID,
        QUANTITY: formData.QUANTITY,
        PRICE: formData.PRICE,
        SIDE: formData.SIDE,
        NOTES: formData.NOTES,
      },
    });
  }
}
