/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide table definition config for multi-pro-code-test.
 *
 * Modification History
 */

tables {

    table (name = "TRADE", id = 2000, audit = details(id = 2100, sequence = "TR")) {
        sequence(TRADE_ID, "TR")
        COUNTERPARTY_ID
        INSTRUMENT_ID not null
        QUANTITY
        PRICE not null
        SYMBOL
        DIRECTION
        TRADE_DATE
        ENTERED_BY
        TRADE_STATUS

        primaryKey {
            TRADE_ID
        }
    }

    table (name = "COUNTERPARTY", id = 2001) {
        sequence(COUNTERPARTY_ID, "CP")
        COUNTERPARTY_NAME
        ENABLED
        COUNTERPARTY_LEI

        primaryKey {
            COUNTERPARTY_ID
        }
    }

    table (name = "INSTRUMENT", id = 2002) {
        sequence(INSTRUMENT_ID, "IN")
        INSTRUMENT_NAME
        MARKET_ID
        COUNTRY_CODE
        CURRENCY_ID
        ASSET_CLASS

        primaryKey {
            INSTRUMENT_ID
        }
    }

    table(name = "POSITION", id = 2003) {
        sequence(POSITION_ID, "PS") //autogenerated sequence
        INSTRUMENT_ID not null
        QUANTITY
        NOTIONAL
        VALUE
        PNL

        primaryKey {
            POSITION_ID
        }
        indices {
            unique {
                INSTRUMENT_ID
            }
        }
    }

    table(name = "INSTRUMENT_PRICE", id = 2004) {
        INSTRUMENT_ID
        LAST_PRICE
        primaryKey {
            INSTRUMENT_ID
        }
    }

    table(name = "ORDER", id = 2005) {
        sequence(ORDER_ID, "OI")
        INSTRUMENT_ID not null
        QUANTITY not null
        PRICE not null
        DIRECTION
        NOTES
        primaryKey {
            ORDER_ID
        }
    }

    table(name = "STOCK", id = 2006){
        sequence(STOCK_ID, "ST")
        COMPANY_NAME not null
        SYMBOL not null
        PRICE not null
        TRADING_VOLUME not null
        CEO not null

        primaryKey {
            STOCK_ID
        }

    }

}