import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const Projects = () => {
  return (
    <div>
      <Splide aria-label="projects" >
        <SplideSlide className="project-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wjRuJFZmRao"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="project-info">
          <h1 className="project-title">Strawberry</h1>
          <br />
          <h3>React | Javascript | Node.JS | CSS | PostgreSQL</h3>
          <br />
          <p>
            Strawberry is a site where users can search through a collection of
            games and add games they wish to play to a playlist.
          </p></div>
        </SplideSlide>

        <SplideSlide className="project-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lpd6vWmXVVM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="project-title">Macronutrient Calculator</h1>
          <br />
          <h3>Javascript | CSS | HTML | PostgreSQL</h3>
          <br />
          <div className="project-info">
          <p>Users can enter information to find caloric needs.</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Projects;
