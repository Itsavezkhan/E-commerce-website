import React from "react";
import { useCustom } from "../context/context";
import "./OrderDetails.css";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { total } = useCustom();
  return (
    <>
      <div className="OrderD_main">
        <h2>Order details : </h2>
        <div className="OrderD_inner">
          <p>Total price of items :</p>
          <span>{total.toFixed(0)}</span>
        </div>
        <div className="OrderD_total">
            <h4>Total : </h4>
            <h4>{total.toFixed(0)}</h4>
        </div>
        <Link to="/placeorder" >
        <button >Proceed to payment</button>
        </Link>
       
      </div>
    </>
  );
};

export default OrderDetails;
