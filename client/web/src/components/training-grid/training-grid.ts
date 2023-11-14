import {ZeroGridPro, zeroGridProTemplate} from '@genesislcap/foundation-zero-grid-pro';
import {customElement, attr, observable} from '@microsoft/fast-element';
import {trainingGridStyles} from './training-grid.styles';
import { TrainingGridTemplate } from './training-grid.template';

@customElement({
  name: 'training-grid',
  template: TrainingGridTemplate,
  styles: trainingGridStyles,
})
export class TrainingGrid extends ZeroGridPro {
    @attr resourceName: string;

}