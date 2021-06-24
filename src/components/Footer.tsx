import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type contactInfo = {
  source: string;
  link: string;
  icon: JSX.Element;
};

const Footer = () => {
  const contacts: contactInfo[] = [
    {
      source: "LinkedIn",
      link: "https://www.linkedin.com/in/codyboaz",
      icon: <FaLinkedin color="#0174b3" size={50} />
    },
    {
      source: "GitHub",
      link: "https://github.com/codyboaz",
      icon: <FaGithub color="000" size={50} />
    }
  ];

  return (
    <footer className="margin-footer" id="contact">
      <h2>Find Me On</h2>
      <ul>
        {contacts.map(({ source, link, icon }) => (
          <li>
            <a href={link}>
              {icon}
              <p>{source}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
