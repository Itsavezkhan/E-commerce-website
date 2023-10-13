import React, { useState } from "react";
import Changeamount from "../changeamount/Changeamount";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCustom } from "../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Singlecart = ({ prod, id }) => {
  const { ourcart, dispatch } = useCustom();

  const [amount, setAmount] = useState(1);

  const setdecrease = () => {
    {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
      dispatch({ type: "DECREASE_CART_ITEM", payload: id });
    }
  };
  const setincrease = (id) => {
    setAmount(amount + 1);
    dispatch({ type: "INCREASE_CART_ITEM", payload: id });
  };

  return (
    <>
      <div className="ourcartitem">
        <div className="firstCartCont">
          <div className="CP_img">
            <img src={prod.image} />
          </div>

          <div className="carttitle">
            <p>{prod.title}</p>
          </div>

          <div className="cartprice">
            <p>{prod.price}</p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <Changeamount
            amount={amount}
            setdecrease={() => {
              setdecrease(id);
            }}
            setincrease={() => {
              setincrease(id);
            }}
          />

          <div className="cartbtn">
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_CART", payload: prod });
                toast.error("Item removed to cart");
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default Singlecart;
