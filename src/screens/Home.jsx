import React from "react";
import { motion } from "framer-motion";
import Tanjiro from "../images/Tanjiro.png";
import Inosuke from "../images/Inosuke.png";
import Zenetsu from "../images/Zenetsu.png";
import Selfie from "../images/Selfie.jpeg";
import "@splidejs/react-splide/css";

const Home = () => {
  return (
    <div className="home-intro-box">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col justify-center lg:flex-row">
          <img
            src={Selfie}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
            alt=""
          />
          <div className="lg:ml-8">
            <h1 className="text-4xl lg:text-5xl font-bold">Hello, I'm Levi!</h1>
            <p className="py-4 lg:py-6">
              I am a full stack developer with a love for anime! The tech I
              primarily work with is JavaScript, React, Nodejs, Expressjs, and
              Tailwindcss. I would love to work with everyone and anyone, let's
              connect!
            </p>
            <button className="btn btn-primary">Projects</button>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ x: [300, 0, 0] }}
        transition={{ ease: "circOut", duration: 2 }}
      >
        <motion.img
          src={Inosuke}
          alt=""
          className="gojo"
          whileHover={{ rotate: 360 }}
        />
        <motion.img
          src={Tanjiro}
          alt=""
          className="gojo"
          whileHover={{ rotate: 360 }}
        />
        <motion.img
          src={Zenetsu}
          alt=""
          className="gojo"
          whileHover={{ rotate: 360 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
