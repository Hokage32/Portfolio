import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setHamburger(!hamburger);
  };

  return hamburger ? (
    <div className="hamburger-menu-container flex flex-col items-center w-screen h-20 relative z-50">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: hamburger && contentLoaded ? 1 : 0, y: hamburger && contentLoaded ? 0 : "-100%" }}
        transition={{ duration: 0.4, opacity: { duration: 0 } }} 
        className="hamburger-menu flex flex-col justify-center items-center w-96 h-64  bg-gray-500 bg-opacity-75 relative z-50  p-6 rounded-bl-3xl rounded-br-3xl "
      >
        <motion.button
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: hamburger ? 1 : 0, y: hamburger ? 0 : "-100%" }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.button>
        <button>Projects</button>
        <button onClick={handleClick}>Close</button>
      </motion.div>
    </div>
  ) : (
    <header>
      <div className="navbar ">
        <div className="flex-none"></div>
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl">Levi Raoelina</a>
        </div>
        <div className="flex-none">
          <button onClick={handleClick} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="inline-block w-5 h-5 stroke-current "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
