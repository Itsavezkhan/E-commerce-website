import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Rating = ({ rate, onCLick }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <span
            key={i}
            onClick={() => {
              onCLick(i);
            }}
          >
            {rate > i ? (
              <StarIcon style={{ fontSize: "30px", color: "purple" }} />
            ) : (
              <StarOutlineIcon style={{ fontSize: "30px", color: "purple" }} />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
