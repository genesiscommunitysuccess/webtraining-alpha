import {html, ref, repeat, when} from '@microsoft/fast-element';
import {StockRegistration} from './stockRegistration';
import {stockRegistrationStyles} from './stockRegistration.styles';
import {sync} from '@genesislcap/foundation-utils';
import { TrainingGrid } from '../../components/training-grid/training-grid';

TrainingGrid;

export const stockRegistrationTemplate = html<StockRegistration>`
    <h2> Stock Registration Page</h2>

    <zero-button @click=${(x) => x.openModal()}>Add new stock</zero-button>
    <hr>
    <zero-layout style="height: 400px;">
        <zero-layout-region type="horizontal">
            <zero-layout-region type="vertical">
                <zero-layout-item>
                    <training-grid resourceName="ALL_STOCKS"></training-grid>
                </zero-layout-item>
                <zero-layout-item>
                    <zero-g2plot-chart type="column" :config=${(x) => x.chartConfiguration}>
                        <chart-datasource
                            resourceName = "ALL_STOCKS"
                            server-fields = "SYMBOL TRADING_VOLUME"
                        ></chart-datasource>
                    </zero-g2plot-chart>
                </zero-layout-item>
            </zero-layout-region>
            <zero-layout-region type="vertical">
                <zero-layout-region type="tabs">
                ${repeat(x => x.displayStock, html`
                    <zero-layout-item>
                        <zero-number-field readonly :value=${sync((x) => x.stockId)} readonly>Id</zero-number-field>
                        <zero-text-field readonly :value=${sync((x) => x.companyName)}>Company name</zero-text-field>
                        <zero-text-field readonly :value=${sync((x) => x.symbol)}>Ticker Symbol</zero-text-field>
                        <alpha-number-field readonly :value=${sync((x) => x.price)} withFormatting :options=${() => ({maximumFractionDigits: 2})}><span slot="start">$</span>Stock price</alpha-number-field>
                        <zero-number-field readonly :value=${sync((x) => x.tradingVolume)} withFormatting :options=${() => ({maximumFractionDigits: 0})}>Trading Volume</zero-number-field>
                        <zero-text-field readonly :value=${sync((x) => x.CEOName)}>CEO name</zero-text-field>
                        </zero-layout-item>
                `)}
                </zero-layout-region>
            </zero-layout-region>
        </zero-layout-region>
    </zero-layout>

    <zero-modal ${ref('newStockModal')} position="right" id="stockModal" class="ScrollOn">
        Stock Registration
        <foundation-form ${ref('stockRegistration')} resourceName="EVENT_STOCK_INSERT" @submit-success=${(x, c) => x.updateDisplayedStock(c.event)}></foundation-form>
    </zero-modal>
`;