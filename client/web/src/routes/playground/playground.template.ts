import {html, ref} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils';

export const myTemplate = html<Playground>`
    <zero-button @click=${(x) => x.openModalCounterparty()}>Add new counterparty</zero-button>
    <zero-button @click=${(x) => x.openModalInstrument()}>Add new instrument</zero-button>

    <zero-modal ${ref('counterpartyModal')} position="right" id="stockModal" class="ScrollOn">
        Insert new counterparty
        <form id="FormsModal">
            <zero-text-field :value=${sync((x) => x.counterpartyId)}>Counterparty Id</zero-text-field>
            <zero-text-field :value=${sync((x) => x.counterpartyName)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.counterpartyLei)}>Ticker Symbol</zero-text-field>
            <zero-button @click=${(x) => x.addNewCounterparty()}>Submit</zero-button>
        </form>
    </zero-modal>
    <zero-modal ${ref('instrumentModal')} position="right" id="stockModal" class="ScrollOn">
        Insert new Instrument
        <form id="FormsModal">
            <zero-text-field :value=${sync((x) => x.instrumentId)}>Id</zero-text-field>
            <zero-text-field :value=${sync((x) => x.instrumentName)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.instrumentMarketId)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.instrumentCountryCode)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.instrumentCurrencyId)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.instrumentAssetClass)}>Company name</zero-text-field>
            <zero-button @click=${(x) => x.addNewInstrument()}>Submit</zero-button>
        </form>
    </zero-modal>

    <div id="BannerPlaceholder"></div>
`;