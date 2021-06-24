import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="margin-footer" id="contact">
      <h2>Find Me On</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/codyboaz">
            <FaLinkedin color="#0174b3" size={50} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/codyboaz">
            <FaGithub color="000" size={50} />
            <p>GitHub</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
