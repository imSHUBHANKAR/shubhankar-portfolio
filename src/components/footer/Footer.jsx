import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll'
import './footer.css'
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
// import {FaXTwitter} from 'react-icons/fa6'
import {FcCopyright} from 'react-icons/fc'



const Footer = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <footer>
      <Link to='header' spy={true} smooth={true} offset={50} duration={500} className='footer__logo'>C for Coding</Link>
      <ul className='permalinks'>
        <li><Link to='header' spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>Home</Link></li>
        <li><Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</Link></li>
        <li><Link to='experience' spy={true} smooth={true} offset={50} duration={500} onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</Link></li>
        <li><Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Services</Link></li>
        <li><Link to='portfolio' spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
        <li><Link to='testimonial' spy={true} smooth={true} offset={50} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
      <div className='footer__socials'>
        <div className='hexagon'>
        <a href='https://www.facebook.com/' rel="noopener noreferrer" target='_blank' style={{color: "#16A2F9", fontsize: '10em'}}><BsFacebook /></a>
        </div>
        <div className='hexagon'>
        <a href='https://www.instagram.com' rel="noopener noreferrer" target='_blank' style={{color:"#fbad50"}}><BsInstagram/></a>
        </div>
        <div className='hexagon'>
        <a href='https://in.linkedin.com' rel="noopener noreferrer" target='_blank' style={{color:"#0A66C2"}}><FaLinkedinIn/></a>
        </div>
        <div className='hexagon'>
        <a href='https://twitter.com' rel="noopener noreferrer" target='_blank' style={{color:"#249EF0"}}><BsTwitter/></a>
        </div>
        <div className='hexagon'>
        <a href='https://www.youtube.com/channel/UCwremaJVFrmhq2b6J8RppGQ' rel="noopener noreferrer" target='_blank' style={{color: "#c80e09"}}><BsYoutube/></a>
        </div>
      </div>
      <div className='footer__copyright'>
        <small><FcCopyright/> C for Coding. All rights are reserved (2023).</small>
      </div>


    </footer>

  )
}

export default Footer