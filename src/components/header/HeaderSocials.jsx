import React from 'react'
import './header.css'
import {FaGithub} from 'react-icons/fa'
import {FcDribbble} from 'react-icons/fc'
import {FaLinkedinIn} from 'react-icons/fa'
import {FcCollapse} from 'react-icons/fc'
import {FcExpand} from 'react-icons/fc'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <FcCollapse/>
        <a className='linkedin' href="https://www.linkedin.com/in/mrshubhankar/" rel='noreferrer' target='_blank'><FaLinkedinIn/></a>
        <a className='github' href='https://github.com/imSHUBHANKAR' rel='noreferrer' target='_blank'><FaGithub/></a>
        <a className='dribbble' href='https://dribbble.com/Shubh242' rel='noreferrer' target='_blank'><FcDribbble/></a>
        <FcExpand/>
    </div>
  )
}

export default HeaderSocials