import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {stockRegistrationTemplate as template} from './stockRegistration.template';
import {stockRegistrationStyles as styles} from './stockRegistration.styles';
import {Tabs, Modal} from '@genesislcap/foundation-zero';
import {Form} from '@genesislcap/foundation-forms';
import {Connect} from '@genesislcap/foundation-comms';
import {GridPro} from '@genesislcap/grid-pro';
import {getActionsMenuDef} from '@genesislcap/grid-pro';

@customElement({
    name: "stock-route",
    template,
    styles
})

export class StockRegistration extends FASTElement {

    newStockModal: Modal;
    stockRegistration: Form;
    stockGrid: GridPro
    @Connect connection: Connect;
    @observable stockId: number;
    @observable companyName: string;
    @observable symbol: string;
    @observable price: number;
    @observable tradingVolume: number
    @observable CEOName: string;
    @observable listOfStock : {
       stockId: number;
       companyName: string;
       symbol: string;
       price: number;
       tradingVolume: number;
       CEOName: string;
    }[] = [];

    @observable displayStock: {
         stockId: number;
         companyName: string;
         symbol: string;
         price: number;
         tradingVolume: number;
         CEOName: string;
    }[] = [];

    @observable selectStock: string;
    @observable edit: boolean = false;
    @observable chartConfiguration = {
        xField: 'groupBy',
        yField: 'value',
    };

    openModal(){
        this.newStockModal.show();
    }

    updateDisplayedStock(event){
    const data = event.detail.payload;
        this.displayStock.push({
            stockId: data.STOCK_ID,
            companyName: data.COMPANY_NAME,
            symbol: data.SYMBOL,
            price: data.PRICE,
            tradingVolume: data.TRADING_VOLUME,
            CEOName: data.CEO,
        });
    this.stockRegistration.reset();
    this.newStockModal.close();
    }

    async connectedCallback(){
        super.connectedCallback()
        this.newStockModal.onCloseCallback = () =>{
            this.stockRegistration.reset()
        }
    }

}