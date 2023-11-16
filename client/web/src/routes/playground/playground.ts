import {customElement, FASTElement, observable} from '@microsoft/fast-element'
import {myTemplate as template} from './playground.template'
import {playgroundStyles as styles} from './playground.styles'
import {Modal, Banner} from '@genesislcap/foundation-zero';
import {Connect} from '@genesislcap/foundation-comms';

@customElement({
    name: 'playground-route',
    template,
    styles
})

export class Playground extends FASTElement {

    @Connect connection: Connect;
    counterpartyModal: Modal;
    instrumentModal: Modal;

    @observable counterpartyId: string;
    @observable counterpartyName: string;
    @observable counterpartyLei: string;
    @observable instrumentId: string;
    @observable instrumentName: string;
    @observable instrumentMarketId: string;
    @observable instrumentCountryCode: string;
    @observable instrumentCurrencyId: string;
    @observable instrumentAssetClass: string;

    openModalCounterparty(){
        this.counterpartyModal.show();
    }

    openModalInstrument(){
        this.instrumentModal.show();
    }

    async addNewCounterparty(){
        const insertCounterparty = await this.connection.commitEvent('EVENT_COUNTERPARTY_INSERT', {
            DETAILS: {
                COUNTERPARTY_ID: this.counterpartyId,
                COUNTERPARTY_NAME: this.counterpartyName,
                COUNTERPARTY_LEI: this.counterpartyLei,
                ENABLED: true
            }
        })
        if (insertCounterparty.MESSAGE_TYPE == 'EVENT_ACK'){
            this.createBanner("COUNTERPARTY CREATED: " + this.counterpartyId)
            this.counterpartyId = '';
            this.counterpartyName = '';
            this.counterpartyLei = '';
            this.counterpartyModal.close();
        } else if (insertCounterparty.MESSAGE_TYPE == 'EVENT_NACK'){
            this.createBanner("ERROR: " + insertCounterparty.ERROR[0].CODE)
        }
    }
    async addNewInstrument(){
        const insertInstrument = await this.connection.commitEvent('EVENT_INSTRUMENT_INSERT', {
            DETAILS: {
                INSTRUMENT_ID: this.instrumentId,
                INSTRUMENT_NAME: this.instrumentName,
                COUNTRY_CODE: this.instrumentCountryCode,
                CURRENCY_ID: this.instrumentCurrencyId,
                ASSET_CLASS: this.instrumentAssetClass,
                MARKET_ID: this.instrumentMarketId,
            }
        })
        if (insertInstrument.MESSAGE_TYPE == 'EVENT_ACK'){
            this.createBanner("INSTRUMENT CREATED: " + this.instrumentId)
            this.instrumentId = ''
            this.instrumentName = ''
            this.instrumentCountryCode = ''
            this.instrumentCurrencyId = ''
            this.instrumentAssetClass = ''
            this.instrumentMarketId = ''
            this.instrumentModal.close();
        } else if (insertInstrument.MESSAGE_TYPE == 'EVENT_NACK'){
            this.createBanner("ERROR: " + insertInstrument.ERROR[0].CODE)
        }
    }


    createBanner(text: string){

        // Creates the banner element
        const bannerElement = document.createElement('zero-banner');
        bannerElement.id = 'banner_' + Math.random().toString(36).substr(2, 9);

        // Sets the HTML content of the banner element
        bannerElement.innerHTML = `
            <div slot="content">
                ${text}
            </div>
            <alpha-button id="button ${bannerElement.id}" slot="action" appearance="lightweight">Close Banner</alpha-button>
        `;

        bannerElement.style.position = 'fixed';
        bannerElement.style.top = '0';
        bannerElement.style.left = '50%'; // Center the banner horizontally
        bannerElement.style.transform = 'translateX(-50%)'; // Center the banner horizontally
        bannerElement.style.width = '30%';
        bannerElement.style.zIndex = '9999';

        // Gets the placeholder div where you want to append the banner
        const placeholderDiv = this.shadowRoot.getElementById('BannerPlaceholder');

        // Appends the banner element to the div
        placeholderDiv.appendChild(bannerElement)

        // Adds dismiss event to the button action
        const actionButton = this.shadowRoot.getElementById("button " + bannerElement.id);
        const tempBanner = this.shadowRoot.getElementById(bannerElement.id) as Banner

        actionButton.addEventListener('click', function() {
            tempBanner.dismiss();
        });

        setTimeout(function() {
            tempBanner.dismiss();
        }, 5000);
    }
}