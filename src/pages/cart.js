import React, { useEffect } from "react";
import "../components/cart.css";
import Singlecart from "../components/singlecart/Singlecart";
import { useCustom } from "../components/context/context";
import { useState } from "react";
import Error from "./Error";
import { type } from "@testing-library/user-event/dist/type";
// import PriceManager from "../components/pricemanager/PriceManager";
import OrderDetails from "../components/orderdetails/OrderDetails";

const Cart = () => {
  const cart = "cart";
  const text = "Proceed to payment"
  const { ourcart, dispatch, total} = useCustom();
  const [amount, setAmount] = useState(1);

  const setdecrease = () => {
    {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
  };
  const setincrease = () => {
    setAmount(amount + 1);
  };

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL", payload: ourcart });
  }, [ourcart]);

  return (
    <>
      <div className="CP_container" style={{ marginTop: "70px" }}>
        <div className={ourcart.length === 0 ? "CP_none" : "CP_main"}>
          {ourcart.length > 0 ? (
            ourcart.map((prod) => (
              <Singlecart prod={prod}  id={prod.id} />
            ))
          ) : (
            <Error component={cart} />
          )}
        </div>
        <div className="pricemanager">
         <OrderDetails/>
        </div>
      </div>
    </>
  );
};

export default Cart;