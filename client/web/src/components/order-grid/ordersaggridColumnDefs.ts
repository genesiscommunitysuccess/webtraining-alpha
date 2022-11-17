import {ColDef} from '@ag-grid-community/core';
import {formatNumber} from '../../utils/formatting';

const orderCellClassRules = {
  'buy-direction-order': params => params.value === 'BUY',
  'sell-direction-order': params => params.value === 'SELL',
};

export const ordersaggridColumnDefs: ColDef[] = [
  {field: 'INSTRUMENT_ID', headerName: 'Instrument', sort: 'desc', flex: 2},
  {field: 'DIRECTION', headerName: 'Direction', cellClass: 'status-cell', cellClassRules: orderCellClassRules, enableCellChangeFlash: true, flex: 1},
  {field: 'QUANTITY', headerName: 'Quantity', valueFormatter: formatNumber(0), type: 'rightAligned', flex: 1, enableCellChangeFlash: true},
  {field: 'ORDER_ID', headerName: 'Order ID', flex: 1, enableCellChangeFlash: true},
  {field: 'PRICE', headerName: 'Price', valueFormatter: formatNumber(2), type: 'rightAligned', flex: 1, enableCellChangeFlash: true},
  {field: 'DIRECTION', headerName: 'Order Side', sort: 'desc', flex: 2},
  {field: 'NOTES', headerName: 'Notes', sort: 'desc', flex: 2},
];
