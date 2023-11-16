import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {positionsTemplate as template} from './positions.template';
import {positionsStyles as styles} from './positions.styles';


@customElement({
  name: 'positions-route',
  template,
  styles,
})

export class Positions extends FASTElement {

}