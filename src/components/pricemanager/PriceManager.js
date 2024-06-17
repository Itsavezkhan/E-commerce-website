import React from 'react'
import { Link } from "react-router-dom";
import { useCustom } from '../context/context';


const PriceManager = ({ourcart, total, handlePayment}) => {

  
  return (
    <>
      <div className="CP_filter">
          <div className="filter_base">
            <h4>
              <span>Order details </span>: [{ourcart.length}] items in cart
            </h4>
            <div className="filter_price">
              <h4>price :</h4> <span>{total.toFixed(0)} $</span>
            </div>
            <div className="filter_price">
              <h4>Shipping charges :</h4> <span>0</span>
            </div>
            <div className="filter_price">
              <h4>Payment mode :</h4> <span> cash</span>
            </div>

            <div className="filter_price">
              <h4>Total price :</h4> <span>{total.toFixed(0)} $</span>
            </div>
            
            
              <button onClick={() => {handlePayment(total)}}>Place Order</button>
             
          </div>
        </div>
      
    </>
  )
}

export default PriceManager
