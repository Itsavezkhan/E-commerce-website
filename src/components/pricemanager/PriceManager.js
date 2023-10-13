import React from 'react'
import { Link } from "react-router-dom";
import { useCustom } from '../context/context';


const PriceManager = ({ourcart, total, handlePayment}) => {

  

  // const loadscript = (src) => {
  //   return new Promise((resolve) =>  {
  //     const script = document.createElement('script')
  //     script.src = src

  //     script.onload = () => {
  //       resolve(true)
  //     }

  //     script.onerror = () => {
  //       resolve(false)
  //     }

  //     document.body.appendChild(script)
  //   })
  // }

  // const handlePayment = async (total) => {
  //   const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
    
  //   if (!res) {
  //     alert("you are offline.....failed to load razorpay")
  //     return
  //   }

  //   const options = {
  //     key: "rzp_test_8LDootk7EkOdw9",
  //     currency: "USD",
  //     amount: total * 100,
  //     name: "We shopp",
  //     description:  "thanks for purchasing",

  //     handler: function (response) {
  //       alert(response.razorpay_payment_id)
  //       alert("payment successfull")
  //     },
  //     prefill: {
  //       name:"we shopp"
  //     }
  //   };
  //   const paymentObject = new window.Razorpay(options)
  //   paymentObject.open()
  // }

  
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
