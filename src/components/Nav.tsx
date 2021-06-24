import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumePDF from "../CodyBoazResume.pdf";

const Nav = () => {
  const [closed, setClosed] = useState(true);

  const handleClick = () => {
    setClosed(!closed);
  };

  return (
    <div className="row">
      <a className="header-menu" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
        </svg>
      </a>
      <nav className={closed ? "nav close" : "nav"}>
        <ul className="nav-list">
          <li className="nav-item">
            <AnchorLink href="#">Home</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#projects">Projects</AnchorLink>
          </li>
          <li className="nav-item">
            <a href={resumePDF} target="_blank">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <AnchorLink href="#contact">Contact Info</AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
