import React from "react";

import { motion } from "framer-motion";
import Tanjiro from "../images/Tanjiro.png";
import Inosuke from "../images/Inosuke.png";
import Zenetsu from "../images/Zenetsu.png";
import Giyu from "../images/Giyu.png"
import Gyomei from "../images/Gyomei.png"
import Shinobu from "../images/Shinobu.png"
import Selfie from "../images/Selfie.jpeg";
import Spline from "@splinetool/react-spline";


const Home = () => {

  
  
  return (
    <div className="home-intro-box relative z-0">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col justify-center lg:flex-row">
          <img
            src={Selfie}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
            alt=""
          />
          <div className="lg:ml-8">
        
          <div className="me">
            <h1 className="text-7xl  font-bold">Hello, I'm Levi!</h1>
            <p className="text-3xl py-6 lg:py-6">
              I am a full stack developer! The tech I
              primarily work with is JavaScript, React, Nodejs, Expressjs, and
              Tailwindcss. I would love to work with everyone and anyone, let's
              connect!
            </p>
           </div>
          </div>
        </div>
      </div>

      <br />
      <div className="flex flex-col gap-20">
      <div>

        <h1 className="text-3xl italic mx-4 ">Here are some of my projects that I have made!</h1>
      </div>
      <div className="project-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wjRuJFZmRao"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="project-info ">
          <h1 className="project-title text-3xl">Strawberry</h1>
          <br />
          <h3 className="text-2xl">React | Javascript | Node.JS | CSS | PostgreSQL</h3>
          <br />
          <p className="text-xl mx-6">
            Strawberry is a site where users can search through a collection of
            games and add games they wish to play to a playlist.
          </p></div>
          <br />
        </div>

        <div className="project-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lpd6vWmXVVM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="project-title text-3xl">Macronutrient Calculator</h1>
          <br />
          <h3 className="text-2xl">Javascript | CSS | HTML | PostgreSQL</h3>
          <br />
          <div className="project-info text-xl">
          <p className="mx-6">Users can enter information to find caloric needs.</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
