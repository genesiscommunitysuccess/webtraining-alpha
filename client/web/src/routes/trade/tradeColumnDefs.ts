import {ColDef} from '@ag-grid-community/core';
import {formatNumber} from '../../utils/formatting';

export const tradeColumnDefs: ColDef[] = [
  {field: 'TRADE_ID', headerName: 'TRADE_ID'},
  {field: 'COUNTERPARTY_ID', headerName: 'Counterparty'},
  {field: 'INSTRUMENT_ID', headerName: 'Instrument'},
  {field: 'SYMBOL', headerName: 'SYMBOL'},
  {field: 'QUANTITY', headerName: 'QUANTITY'},
  {field: 'PRICE', headerName: 'PRICE', valueFormatter: formatNumber(2)},
  {field: 'DIRECTION', headerName: 'DIRECTION'},
  {field: 'TRADE_STATUS', headerName: 'Status'},
];
