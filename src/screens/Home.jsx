import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import { motion } from "framer-motion";
import Self from "../images/Self.jpeg";

const Home = () => {
  return (
    <div className="home-intro-box">
      <div className="home-intro">
        <div className="description-box">
          <div className="about-description">
            <h2 className="project-title">
              Hey, I'm Levi. A developer with a love for design and creativity.
            </h2>
            
            <h3>
              I can learn just about anything, and I enjoy learning and gaining
              inspiration from others.
            </h3>
            <h4>I also love food, anime, and dogs.</h4>

            <div className="socials">
              <div className="socials-box">
                <div className="social-tags">
                  <Link
                    to={"https://www.linkedin.com/in/levi-raoelina-71a96326b/"}
                  >
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={linkedin}
                      alt=""
                    />
                  </Link>
                  <Link to={"https://github.com/Hokage32"}>
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={github}
                      alt=""
                    />
                  </Link>

                  <h3>Leviraoelina34@gmail.com</h3>
                </div>
                <img src={Self} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
