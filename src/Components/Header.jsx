import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="title">

        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1 className="myName">Levi Raoelina</h1>
        </Link>
        <p className="myTitle">Front end developer </p>
      </nav>

      <nav className="paths">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <li>Home</li>
        </Link>

        <Link
          to={"/projects"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <li>Projects</li>
        </Link>

       
      </nav>
    </header>
  );
};

export default Header;
