import React from "react";
// import {Link} from 'react-scroll'
import "./about.css";
import ME from "../../assets/aboutPic.jpg";
import DogPic from '../../assets/DogPic.png'
// import {FcApproval} from 'react-icons/fc'
// import {FcOpenedFolder} from 'react-icons/fc'
// import {FcCustomerSupport} from 'react-icons/fc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* -----------------------Dog Pic--------------- */}
        <div className="portfolio-card">
          <div className="portfolio-content">
            <div className="dog-image">
              <img src={DogPic} alt="Dog" />
            </div>
            <div className="portfolio-details">
              <h2>My Portfolio</h2>
              <p className="portfolio-amount">$243,594.80</p>
              <div className="portfolio-growth">
                <div className="growth-icon">📊</div>
                <p>+25%</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Pic" />
          </div>
        </div>

        <div className="experience__container">
          <div className="experience__frontend">
            <h3>Read plz</h3>
            <p style={{ margin: "10px" }}>
              Highly motivated Frontend and UI/UX Developer with a strong
              foundation in computer science. Committed to continuous learning
              and teamwork, specializing in web and app development. Skilled in
              creative arts for idea generation, adept at multitasking, and
              delivering innovative solutions in collaborative environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
