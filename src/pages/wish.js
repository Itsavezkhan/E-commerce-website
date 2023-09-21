import React from "react";
import { useCustom } from "../components/context/context";
import Product from "../components/product/Product";
import "../components/wish.css";
import Error from "./Error";

const Wish = () => {
  const wishlist = "wishlist";
  const { ourwish, ourcart } = useCustom();

  return (
    <div className="wish_main">
      <div className="wish_ind">
          {ourwish.length > 0 ? (
            ourwish.map((prod) => <Product {...prod}/>
            )
          ) : (
            <Error component={wishlist} />
          )}
      </div>
    </div>
  );
};

export default Wish;
