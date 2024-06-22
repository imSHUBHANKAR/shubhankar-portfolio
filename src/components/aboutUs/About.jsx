import React from "react";
import "./about.css";

import ME from "../../assets/aboutPic.jpg";
import { FaGithub } from "react-icons/fa";
import { FcDribbble } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";

const About = () => {
  return (
    <section id="portfolio">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container portfolio__container">
        {/* --------------------------------1st sections -------------------------------------------------*/}
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={ME} alt="Profile_Pic" />
          </div>
          <div className="s">
            <h3>Social Links</h3>
            <div className="social_links">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/mrshubhankar/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn size={32} />
              </a>
              <a
                className="github"
                href="https://github.com/imSHUBHANKAR"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={32} />
              </a>
              <a
                className="dribbble"
                href="https://dribbble.com/Shubh242"
                rel="noreferrer"
                target="_blank"
              >
                <FcDribbble size={32} />
              </a>
              <a
                className="benhance"
                href="https://www.behance.net/mr-shubhankar"
                rel="noreferrer"
                target="_blank"
              >
                <BsBehance size={32} />
              </a>
            </div>
          </div>

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
