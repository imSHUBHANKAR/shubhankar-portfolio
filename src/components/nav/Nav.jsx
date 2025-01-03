// import React from 'react'
// import { useState } from 'react'
// import './nav.css'
// import {Link} from 'react-scroll'
// // import {AiOutlineHome} from 'react-icons/ai'
// // import {AiOutlineUser} from 'react-icons/ai'
// // import {BiBook} from 'react-icons/bi'
// // import {RiServiceLine} from 'react-icons/ri'
// // import {BiMessageSquareDetail} from 'react-icons/bi'

// // my own icon fron react icons-----
// // import {BsFillPersonFill} from 'react-icons/bs'
// // import {FcServices} from 'react-icons/fc'
// // import {FcBriefcase} from 'react-icons/fc'
// // import {FcCustomerSupport} from 'react-icons/fc'
// import {FcHome} from 'react-icons/fc'
// import {FcManager} from 'react-icons/fc'
// import {FcBiotech} from 'react-icons/fc'
// import {FcInTransit} from 'react-icons/fc'
// import {FcContacts} from 'react-icons/fc'



// const Nav = () => {
//   const [activeNav,setActiveNav] = useState('#')
//   return (
//     <nav>
//       {/* <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''} ><FcHome/></a> */}
//       {/* <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcManager/></a>
//       <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcBiotech/></a>
//       <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcInTransit/></a>
//       <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></a> */}

//       <Link to='header' spy={true} smooth={true} offset={0} duration={500} onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''} ><FcHome/></Link>
//       <Link to='about' spy={true} smooth={true} offset={20} duration={500} onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcManager/></Link>
//       <Link to='experience' spy={true} smooth={true} offset={20} duration={500} onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcBiotech/></Link>
//       <Link to='services' spy={true} smooth={true} offset={20} duration={500} onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcInTransit/></Link>
//       <Link to='contact' spy={true} smooth={true} offset={20} duration={500} onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></Link>
//     </nav>
//   )
// }

// export default Nav


import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import { FcHome, FcManager, FcBiotech, FcInTransit, FcContacts } from 'react-icons/fc'
import { Tooltip } from 'react-tooltip'  // Updated import for Tooltip

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <Link
        to='header'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
        data-tooltip-id="home-tooltip"
        data-tooltip-content="Home"
      >
        <FcHome />
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        offset={20}
        duration={500}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        data-tooltip-id="about-tooltip"
        data-tooltip-content="About Us"
      >
        <FcManager />
      </Link>
      <Link
        to='experience'
        spy={true}
        smooth={true}
        offset={20}
        duration={500}
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        data-tooltip-id="experience-tooltip"
        data-tooltip-content="Experience"
      >
        <FcBiotech />
      </Link>
      <Link
        to='services'
        spy={true}
        smooth={true}
        offset={20}
        duration={500}
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        data-tooltip-id="services-tooltip"
        data-tooltip-content="Services"
      >
        <FcInTransit />
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        offset={20}
        duration={500}
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        data-tooltip-id="contact-tooltip"
        data-tooltip-content="Contact"
      >
        <FcContacts />
      </Link>

      {/* Tooltip components */}
      <Tooltip id="home-tooltip" />
      <Tooltip id="about-tooltip" />
      <Tooltip id="experience-tooltip" />
      <Tooltip id="services-tooltip" />
      <Tooltip id="contact-tooltip" />
    </nav>
  )
}

export default Nav
