import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className='Checkout'>
        <div className='left_side'>
            <div>
                <h2 className='checkout_title'>Cart</h2>
            </div>
             
        </div>
        <div className='right_side'>
          <Subtotal/>
            <h2>Total</h2>
        </div>
    </div>
  )
}

export default Checkout