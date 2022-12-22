import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
function subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(Value) => (
        <>
        <p>
          Subtotal (0 items): <strong>0</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox"/> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}
      />
      <button>Buy now</button>
    </div>
  )
}

export default subtotal