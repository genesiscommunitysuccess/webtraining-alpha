
import {zeroGridProStyles} from '@genesislcap/foundation-zero-grid-pro';
import {css, ElementStyles} from '@microsoft/fast-element';
import {BUY_SIDE, SELL_SIDE} from './colors';

export const positionsGridStyles: ElementStyles = css`
  ${zeroGridProStyles}

  .status-cell {
    display:flex;
    align-items: center;
    margin-left: 6px;
  }
  
  .status-cell::after {
    content: "";
    position: absolute;
    left: 6px;
    height: 100%;
    width: 3px;
  }

  .buy-direction-order.status-cell::after {
    background-color: ${BUY_SIDE};
  }

  .buy-direction-order {
    color: ${BUY_SIDE};
  }

  .sell-direction-order.status-cell::after {
    background-color: ${SELL_SIDE};
  }

  .sell-direction-order {
    color: ${SELL_SIDE};
  }
`;
