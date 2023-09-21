import React, { useEffect } from "react";
import "../components/singlecart/singlecart.css";
import { useCustom } from "../components/context/context";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCart = () => {

  const { getSingleProduct, wesingleproducts, weproducts, ourcart, loginState: { isLoggedIn },dispatch, ourwish, } = useCustom();

  const { category, description, image, price, rating, title } =
    wesingleproducts;

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`https://fakestoreapi.com/products/${id}`);
  });

  return (
    <>
      <div className="SP_body">
        <span>
          <Link to="/" className="PN_links">
            Home/
          </Link>
          <h4>{category}</h4>
        </span>
        <div className="SP_container">
          <div className="SP_img">
            <img src={image} />
          </div>
          <div className="SP_desc">
            <span>
              <p>{category}</p>
            </span>
            <p className="SP_title">{title}</p>
            <p className="SP_price">$ {price}</p>
            <p className="SP_des">{description}</p>

            <div className="SP_btn">
              {ourcart.some((p) => p.id === wesingleproducts.id) ? (
                <Link to="/cart">
                  <button>Go to cart</button>
                </Link>
              ) : isLoggedIn ? (
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_CART", payload: wesingleproducts });
                    toast.success("Item adeed to cart");
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <Link to="/login">
                  <button className="add_btn">
                    Add to cart
                  </button>
                </Link>
              )}

              {ourwish.some((p) => p.id === wesingleproducts.id) ? (
                 <Link to="/wish">
                 <button>wishlist</button>
               </Link>
              ) : isLoggedIn ? (
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_WISH", payload: wesingleproducts });
                    toast.success("Item adeed to wishlist");
                  }}
                  className="add_btn"
                >
                  Add to wishlist
                </button>
              ) : (
                <Link to="/login">
                  <button className="add_btn">Add to wishlist</button>
                </Link>
              )}
            </div>
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

export default SingleCart;
