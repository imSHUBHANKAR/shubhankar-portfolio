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
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* -----------------------Dog Pic--------------- */}
        <div className="about-card">
          <div className="about-card-content">
            <div className="dog-image">
              <img src={DogPic} style={{width:'10rem', height:'auto', marginTop: '-27px'}} alt="Dog" />
            </div>
            <div className="about-card-details">
              {/* <article className="about__item "> */}
              <div className="about-card__item-image  ">
                <img src={ME} alt="Profile_Pic" />
              </div>
              <div className="s">
                <h3>Social Links</h3>
                <div className="about-card__social_links">
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

              <div className="about__item-cts"></div>
            </div>
          </div>
        </div>
        {/* -----------------------Dog Pic--------------- */}
        {/* --------------------------------1st sections -------------------------------------------------*/}
        {/* <article className="about__item ">
          <div className="about__item-image">
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

          <div className="about__item-cts"></div>
        </article> */}

        {/* --------------------------------2nd sections -------------------------------------------------*/}
        {/* <div className="about-card">
          <div className="about-card-content">
            <div className="dog-image">
              <img src={DogPic} alt="Dog" />
            </div>
            <div className="about-card-details">
              <p style={{ margin: "10px" }}>
                Highly motivated Frontend and UI/UX Developer with a strong
                foundation in computer science. Committed to continuous learning
                and teamwork, specializing in web and app development. Skilled
                in creative arts for idea generation, adept at multitasking, and
                delivering innovative solutions in collaborative environments.
              </p>
              <div className="about__item-cts"></div>
            </div>
          </div>
        </div> */}

        <article className="about__item">
          <div className="about__item-image">
            <p style={{ margin: "10px" }}>
              Highly motivated Frontend and UI/UX Developer with a strong
              foundation in computer science. Committed to continuous learning
              and teamwork, specializing in web and app development. Skilled in
              creative arts for idea generation, adept at multitasking, and
              delivering innovative solutions in collaborative environments.
            </p>
          </div>
          <img src={Cat}  style={{width:'10rem', height:'auto', marginLeft:'5rem'}} alt="alt"/>
          <div className="about__item-cts"></div>
        </article>
      </div>
    </section>
  );
};

export default About;
