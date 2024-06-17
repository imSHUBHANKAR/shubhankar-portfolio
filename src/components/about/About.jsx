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
            <img src={ME} alt='About Pic'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              {/* <FaAward className='about__icon'/> */}
              <FcApproval className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              {/* <VscFolderLibrary className='about__icon'/> */}
              <FcOpenedFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>

          </div>
          <p>
          Eager to embark on a career in the field of computer science and learn new things and skills in life. 
          Focus on continuous growth, adaptability, and teamwork. Contribute to an innovative organization's success 
          while expanding my skills and knowledge. Main area of interest is Web and App development along with drawing, 
          painting, sketching, which helps to create new ideas and can handle multiple tasks daily.
          </p>

          <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className='btn btn-primary'>Let's Talk! <FcCustomerSupport/></Link>
        </div>
      </div>

    </section>
  )
}

export default About