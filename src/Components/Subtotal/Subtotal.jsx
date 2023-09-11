import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import {  useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
const [{ basket }, dispatch] = useStateValue();
const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
  
}

return (
  <div>
    <CurrencyFormat
      renderText={(value) => (
        <div className="subtotal">
          <p>
            Subtotal({basket.length} items):<strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />This order contains a gift
          </small>
          <button
            onClick={(e) =>navigate('/payment')}
            className="subtotal__button"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  </div>
);
}

export default Subtotal;