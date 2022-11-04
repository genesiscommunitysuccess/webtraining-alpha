import {html} from '@microsoft/fast-element';
import type {Order} from './order';

export const OrderTemplate = html<Order>`
<div class="split-layout">
    <div class="top-layout">
      <zero-form class="order-entry-form" 
        resourceName="EVENT_ORDER_INSERT"
        @submit=${(x, c) => x.insertOrder(c.event as CustomEvent)}>
      </zero-form>
    </div> 
</div>
`;
