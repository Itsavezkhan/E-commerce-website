import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const footer = () => {
  return (
    <>
      <div className="footer_cont">
        <div className="footer_made">
          <p>We shoppe made with 💜 by Avez</p>
          <div>
            <GitHubIcon className="footer_icons" />
            <LinkedInIcon className="footer_icons" />
            <TwitterIcon className="footer_icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
