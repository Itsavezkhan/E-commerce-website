import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCustom } from "../context/context";
import reducer from "../context/reducer";
import Star from "./Star";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = (prod) => {
  const API = "https://fakestoreapi.com/products";

  const navigate = useNavigate();

  const { id, rating } = prod;

  const {
    ourcart,
    dispatch,
    ourwish,
    loginState: { isLoggedIn },
    loginDispatch,
  } = useCustom();

  return (
    <>
      <div className="prod">
        <div className="prod_card">
          <div className="prod_img">
            <Link to={`/singlecart/${id}`}>
              <img
                src={prod?.image}
                alt="prodimage"
                to={`https://fakestoreapi.com/products/${id}`}
              />
            </Link>
          </div>
          <div className="prod_desc">
            <h4>{prod?.title}</h4>
            <Star rating={rating} />
            <span>
              <h1>$</h1>
              <p>{prod?.price}</p>
            </span>
          </div>

          <div className="products_btn">
            {ourcart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_CART", payload: prod });
                }}
                style={{
                  backgroundColor: `rgba(155, 111, 155,1)`,
                  color: "white",
                }}
              >
                Remove cart
              </button>
            ) : isLoggedIn ? (
              <button
                onClick={() => {
                  dispatch({ type: "ADD_CART", payload: prod });
                  toast.success("Item adeed to cart");
                }}
              >
                Add to cart
              </button>
            ) : (
              <Link to="/login">
                <button style={{width: '8rem', padding: '2px'}}>
                  Add to cart
                </button>
              </Link>
            )}

            {/* WISHLIST START */}

            {ourwish.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_WISH", payload: prod });
                  toast.error("Item removed from wishlist");
                }}
                style={{
                  backgroundColor: `rgba(155, 111, 155,1)`,
                  color: "white",
                }}
              >
                Remove
              </button>
            ) : isLoggedIn ? (
              <button
                onClick={() => {
                  dispatch({ type: "ADD_WISH", payload: prod });
                  toast.success("Item adeed to wishlist");
                }}
                className="add_btn"
              >
                Add to wishlist
              </button>
            ) : <Link to="/login">
            <button style={{ width: '8rem'}}>
              Add to wishlist
            </button>
          </Link> }
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

export default Product;


