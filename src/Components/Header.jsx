import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sling as Hamburger } from 'hamburger-react'

const Header = () => {
  return (
    <header>
      <nav className="title">

        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1 className="myName">Levi Raoelina</h1>
        </Link>
        <p className="myTitle">Full stack developer </p>
      </nav>

      <nav className="paths">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <motion.li  whileHover={{ scale: 1.2 }}>Home</motion.li>
        </Link>

        <Link
          to={"/projects"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <motion.li  whileHover={{ scale: 1.2 }}>Projects</motion.li>
        </Link>

      
      </nav>
    </header>
  );
};

export default Header;
