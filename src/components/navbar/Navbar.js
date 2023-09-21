import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useCustom } from "../context/context";
import cartpng from "./cart png.png"
import MenuIcon from "@mui/icons-material/Menu";
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    ourwish,
    ourcart,
    filterstate: { sorting },
    filterdispatch,
    loginState: {isLoggedIn}, 
    loginDispatch,
  } = useCustom();


  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <img src={cartpng} />
          <h2>
            <Link to="/" className="Navbar_home">
              WE SHOPP
            </Link>
          </h2>
        </div>

        <div className="navbar_center">
          <input
            placeholder="Search your product..."
            value={sorting}
            onChange={(e) =>
              filterdispatch({ type: "SORT_BY_QUERY", payload: e.target.value })
            }
          />
          <button onClick={() => navigate("products")}>search</button>
        </div>

        <div className="navbar_right">
          <div>
            <Link to="/products" className="linkss">
              <li>explore</li>
            </Link>
          </div>
          <div className="navbar_right_right">
            <Badge badgeContent={ourwish.length} color="secondary">
              <Link to="/wish" className="linkss">
                <FavoriteBorderIcon className="wishlist" />
              </Link>
            </Badge>

            <Badge badgeContent={ourcart.length} color="secondary">
              <Link to="/cart" className="linkss">
                <ShoppingCartOutlinedIcon className="badge" />
              </Link>
            </Badge>
            {isLoggedIn ? 
              <button onClick={() => {
                  loginDispatch({ type: "logout"});
                }}>logout</button>
            : <Link to="/login" >
              <button >login</button>
            </Link> }
            
          </div>

          <div>
            <MenuIcon className="nav_menu"  onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            {isMenuOpen && <MenuDropDown isMenuOpen={isMenuOpen}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
