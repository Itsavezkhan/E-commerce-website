import React, { useEffect } from "react";
import "../components/cart.css";
import Singlecart from "../components/singlecart/Singlecart";
import { useCustom } from "../components/context/context";
import { useState } from "react";
import Error from "./Error";

const Cart = () => {
  const cart = "cart";
  const { ourcart, dispatch } = useCustom();
  const [total, setTotal] = useState();
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
    setTotal(
      ourcart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0)
    );
  }, [ourcart]);

  return (
    <>
      <div className="CP_container" style={{ marginTop: "70px" }}>
        <div className={ourcart.length === 0 ? "CP_none" : "CP_main"}>
          {ourcart.length > 0 ? (
            ourcart.map((prod) => (
              <Singlecart prod={prod} setTotal={setTotal} id={prod.id} />
            ))
          ) : (
            <Error component={cart} />
          )}
        </div>

        <div className="CP_filter">
          <div className="filter_base">
            <h4>
              <span>Order details </span>: [{ourcart.length}] items in cart
            </h4>
            <div className="filter_price">
              <h4>price :</h4> <span>{total} $</span>
            </div>
            <div className="filter_price">
              <h4>Shipping charges :</h4> <span>0</span>
            </div>
            <div className="filter_price">
              <h4>Payment mode :</h4> <span> cash</span>
            </div>

            <div className="filter_price">
              <h4>Total price :</h4> <span>{total} $</span>
            </div>

            <button>proceed to payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;