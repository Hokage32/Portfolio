import React from "react";
import LinkedIn from "../images/linkedin.svg";
import Github from "../images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center text-center footer p-10 bg-neutral text-neutral-content w-screen static bottom-0 text-2xl">
        <div>
          <h1>Socials</h1>
          <div className="flex gap-3 justify-center ">
            <Link to={'https://www.linkedin.com/in/levi-raoelina-71a96326b/'}>
              <img src={LinkedIn} alt="" />
            </Link>
            <Link to={'https://github.com/Hokage32'}>
              <img src={Github} alt="" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
