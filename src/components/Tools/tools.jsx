import React from 'react';
import './tools.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


// const tools = ()=>{
//     return (
//         <div className="all_tools">
//             <h1>Calculator</h1>
//             <div className="cal">1</div>

//         </div>
//     )
// }

const tools = () => {
    return (
        <section>
      <div className='all_tools'>
          <a href="https://www.linkedin.com/in/mrshubhankar/" rel='noreferrer' target='_blank'><BsLinkedin/></a>
          <a href='https://github.com/imSHUBHANKAR' rel='noreferrer' target='_blank'><FaGithub/></a>
          <a href='https://dribbble.com/Shubh242' rel='noreferrer' target='_blank'><FiDribbble/></a>
      </div>
      </section>
    )
  }

export default tools