import React from "react";
import "../components/placeorder.css";
import { useCustom } from "../components/context/context";
import SummaryCard from "../components/summarycard/SummaryCard";
import PriceManager from "../components/pricemanager/PriceManager";

const PlaceOrder = () => {
  const { ourcart, dispatch, total } = useCustom();

  const {handlePayment} = useCustom();
  

  return (
    <>
      <div className="PO_container">
        <div className="PO_address_main">
          <h1>Address :-</h1>
          <h4>Add New Address +</h4>
          <div className="PO_left_main">
            <input
              type="radio"
              id="POaddress"
              checked="checked"
              name="POaddress"
              value="POaddress"
            />
            <div className="PO_add_names">
              <label>Burhan khan</label>
              <p>Second street, downtown 2037, middlepath</p>
              <p> Otawa, near xyz complex</p>
              <p>+442618993</p>
            </div>
          </div>
        </div>
        <div className="PO_PlaceOrder">
          {ourcart.map((prod) => (
           <SummaryCard prod={prod}  id={prod.id} />
          ))}
          <PriceManager ourcart={ourcart} total={total} handlePayment={handlePayment}/>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
