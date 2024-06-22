import React from 'react'
import {Link} from 'react-scroll'
import './about.css'
import ME from '../../assets/aboutPic.jpg'
import {FcApproval} from 'react-icons/fc'
import {FcOpenedFolder} from 'react-icons/fc'
import {FcCustomerSupport} from 'react-icons/fc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Pic' />
          </div>
        </div>

      </div>

    </section>
  )
}

export default About