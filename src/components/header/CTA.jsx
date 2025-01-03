// import React from 'react'
// import {Link} from 'react-scroll'
// import CV from './cv.pdf'
// import {FcDownload} from 'react-icons/fc'
// import {FcCustomerSupport} from 'react-icons/fc'


// const CTA = () => {
//   return (
//     <div className='cta'>
//         <a href={CV} download='Shubhankar' className='btn'>Download CV <FcDownload/></a>
//         {/* <a href={CV} download='Shubhankar' className='button'>
//         <ul>
//             <li>&#68;ownload</li>
//             <li>&#68;ownloading</li>
//             <li>Open File</li>
//         </ul>
//         <div>
//             <svg viewBox="0 0 24 24"></svg>
//         </div>
//         </a> */}

//         <Link to='contact' spy={true} smooth={true} offset={30} duration={500} className='btn btn-primary'>Let's Talk!.. <FcCustomerSupport/></Link>

//     </div>
//   )
// }

// export default CTA

import React from 'react'
import { Link } from 'react-scroll'
import CV from './cv.pdf'
import UIUXcv from './UiUxResume.pdf'
import { FcDownload } from 'react-icons/fc'
import { FcCustomerSupport } from 'react-icons/fc'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download='Shubhankar-Kumar-Frontend-Developer' className='btn custom-blue-button'>
        Software Resume <FcDownload />
      </a>
      <a href={UIUXcv} download='Shubhankar-Kumar-Frontend-Developer' className='btn custom-blue-button1'>
        UI/UX Resume <FcDownload />
      </a>

      <Link
        to='contact'
        spy={true}
        smooth={true}
        offset={30}
        duration={500}
        className=' custom-button'
      >
        Let's Talk!.. <FcCustomerSupport />
      </Link>
    </div>
  )
}

export default CTA
