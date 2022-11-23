import {css} from "@microsoft/fast-element";

export const OrderStyles = css`
  .quantity-ok {
    color: green;
  }

  .quantity-nok {
    color: red;
  }

  .required-yes {
    color: red;
  }
  
  zero-card div {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    align-items: center;
    align-content: center;
    gap: 0.5rem
  }
`;
