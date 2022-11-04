import {customElement, FASTElement} from '@microsoft/fast-element';
import {ReportingTemplate as template} from './reporting.template';
import {ReportingStyles as styles} from './reporting.styles';

const name = 'reporting-route';

@customElement({
  name,
  template,
  styles,
})
export class Reporting extends FASTElement {
    constructor() {
      super();
    }
}
