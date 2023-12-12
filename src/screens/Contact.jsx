import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-inner">
        <h2>Please contact me at: Leviraoelina34@gmail.com, or feel free to reach out on Linkedin!</h2>
        <Link to={"https://www.linkedin.com/in/levi-raoelina-71a96326b/"}>
          <motion.img src={linkedin} alt="" whileHover={{scale: 1.3}} animate={{x:[100,0,0]}}/>
        </Link>
        <Link to={"https://github.com/Hokage32"}>
          <motion.img src={github} alt="" whileHover={{scale: 1.3}} animate={{x:[100,0,0]}}/>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
