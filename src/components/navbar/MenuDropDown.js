import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./MenuDropDown.css";
import { useCustom } from "../context/context";

const MenuDropDown = ({isMenuOpen}) => {

  const {
    loginState: {isLoggedIn}, 
    loginDispatch,
  } = useCustom();
  return (
    <>
      <div className="DropDown">
        <span>
          <Link to="/wish" className="linkss">
            <FavoriteBorderIcon className="wishlist" />
            Wishlist
          </Link>
        </span>
        <span>
          <Link to="/cart" className="linkss">
            <ShoppingCartOutlinedIcon className="badge" />
            Cart
          </Link>
        </span>
        <div>{isLoggedIn ? <h5 onClick={() => {loginDispatch({type: 'logout'})}}>logout</h5> : <Link to="/login" className="loginNA"><h5>Login</h5></Link>}
             
        </div>
      </div>
    </>
  );
};

export default MenuDropDown;
