import React from "react";
import "./about.css";

import ME from "../../assets/aboutPic.jpg";
import { FaGithub } from "react-icons/fa";
import { FcDribbble } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import DogPic from "../../assets/DogPic.png";
import Cat from '../../assets/cat.png';

const About = () => {
  return (
    <section id="portfolio">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container portfolio__container">
        {/* -----------------------Dog Pic--------------- */}
        <div className="portfolio-card">
          <div className="portfolio-card-content">
            <div className="dog-image">
              <img src={DogPic} style={{width:'10rem', height:'auto', marginTop: '-27px'}} alt="Dog" />
            </div>
            <div className="portfolio-card-details">
              {/* <article className="portfolio__item "> */}
              <div className="portfolio-card__item-image  ">
                <img src={ME} alt="Profile_Pic" />
              </div>
              <div className="s">
                <h3>Social Links</h3>
                <div className="portfolio-card__social_links">
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
            </div>
          </div>
        </div>
        {/* -----------------------Dog Pic--------------- */}
        {/* --------------------------------1st sections -------------------------------------------------*/}
        {/* <article className="portfolio__item ">
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
        </article> */}

        {/* --------------------------------2nd sections -------------------------------------------------*/}
        {/* <div className="portfolio-card">
          <div className="portfolio-card-content">
            <div className="dog-image">
              <img src={DogPic} alt="Dog" />
            </div>
            <div className="portfolio-card-details">
              <p style={{ margin: "10px" }}>
                Highly motivated Frontend and UI/UX Developer with a strong
                foundation in computer science. Committed to continuous learning
                and teamwork, specializing in web and app development. Skilled
                in creative arts for idea generation, adept at multitasking, and
                delivering innovative solutions in collaborative environments.
              </p>
              <div className="portfolio__item-cts"></div>
            </div>
          </div>
        </div> */}

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
          <img src={Cat}  style={{width:'10rem', height:'auto', marginLeft:'9rem'}} alt="alt"/>
          <div className="portfolio__item-cts"></div>
        </article>
      </div>
    </section>
  );
};

export default About;
