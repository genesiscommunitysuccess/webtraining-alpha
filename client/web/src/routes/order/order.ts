import {customElement, FASTElement} from '@microsoft/fast-element';
import {OrderTemplate as template} from './order.template';
import {OrderStyles as styles} from './order.styles';

const name = 'order-route';

@customElement({
  name,
  template,
  styles,
})
export class Order extends FASTElement {
    constructor() {
      super();
    }
}
