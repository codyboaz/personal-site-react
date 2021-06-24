import React from "react";
import profileImg from "../images/profile.png";

const Header = () => {
  return (
    <div className="row main-header">
      <div className="col-6">
        <img
          src={profileImg}
          className="portfolio-img"
          alt="Picture of Cody Boaz"
        />
      </div>
      <div className="col-6">
        <div className="header-text">
          <h1 className="align-right">Cody Boaz</h1>
          <p className="align-right">Front End Developer</p>
          <p className="align-right">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
