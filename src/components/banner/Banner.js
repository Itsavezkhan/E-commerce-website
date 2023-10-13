import React from "react";
import "./Banner.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Banner = () => {

  const navigate = useNavigate();
  
  const [slideIndex, setSlideIndex] = useState(0);
  const handleclickleft = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };
  const handleclickright = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  return (
    <>
      <div className="banner_container">
        <div className="arrow_left" onClick={handleclickleft}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="arrow_right" onClick={handleclickright}>
          <ChevronRightIcon />
        </div>
        
        
        <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}
        >
          <div className="slider">
            <div className="imgcont_first">
              <img
                src={require('./woman_bag-removebg-preview.png')} 
              />
            </div>
            <div className="infocont_first">
              <h3>Irresistable offers</h3>
              <p>Shop our latest brands and get 50% off on shopping of over 300</p>
              <button onClick={() => navigate("products")}>SHOW NOW</button>
            </div>
          </div>

          <div className="slider">
            <div className="imgcontainer">
              <img
                src={require("./iphone.png")} 
              />
            </div>
            <div className="infocont">
              <h3>our brands</h3>
              <p>Best deals amongst all, Grab it fast.</p>
              <button onClick={() => navigate("products")}>SHOW NOW</button>
            </div>
          </div>

          <div className="slider">
            <div className="imgcontainer">
               <img 
                src={require("./pink_girl-removebg-preview.png")}
              />
            </div>
            <div className="infocont">
              <h3>1 time offer</h3>
              <p>Chance to win special prize, Hurry up !!!</p>
              <button onClick={() => navigate("products")}>SHOW NOW</button>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Banner;
