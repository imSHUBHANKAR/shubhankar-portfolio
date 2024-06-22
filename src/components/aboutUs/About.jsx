import React from "react";
import "./about.css";

import ME from "../../assets/aboutPic.jpg";


const About = () => {
  return (
    <section id="portfolio">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container portfolio__container">
        {/* --------------------------------1st sections -------------------------------------------------*/}
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={ME} alt="" />
          </div>
          <h3>Academic Website</h3>
          <div className="portfolio__item-cts"></div>
        </article>

        {/* --------------------------------2nd sections -------------------------------------------------*/}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <p style={{ margin: "10px" }}>
              Highly motivated Frontend and UI/UX Developer with a strong
              foundation in computer science. Committed to continuous learning
              and teamwork, specializing in web and app development. Skilled in
              creative arts for idea generation, adept at multitasking, and
              delivering innovative solutions in collaborative environments.
            </p>
          </div>
          <div className="portfolio__item-cts"></div>
        </article>
      </div>
    </section>
  );
};

export default About;
