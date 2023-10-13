import React from "react";
import './SummaryCard.css'

const SummaryCard = ({ prod, id }) => {
  return (
    <>
      <div>
        <div className="Summary_Card">
          <img src={prod.image}/>
          X
          <h2>{prod.qty}</h2>
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
