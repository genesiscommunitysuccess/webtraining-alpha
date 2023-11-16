import { zeroGridProTemplate } from '@genesislcap/foundation-zero-grid-pro';
import {html, repeat} from '@microsoft/fast-element'
import {TrainingGrid} from './training-grid'


export const TrainingGridTemplate = html <TrainingGrid>`
    <zero-grid-pro>
        <grid-pro-genesis-datasource
                  resource-name=${(x) => x.resourceName}
        </grid-pro-genesis-datasource>
    <zero-grid-pro>

`;