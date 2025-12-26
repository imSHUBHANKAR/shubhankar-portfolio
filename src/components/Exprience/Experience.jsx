// import React from 'react'
// import './experience.css'
// import UI from '../../assets/UIUX.png'
// import {FcRating} from 'react-icons/fc'
// import {FcLandscape} from 'react-icons/fc'
// import {FcComments} from 'react-icons/fc'
// import {FcOk} from 'react-icons/fc'

// const Experience = () => {
//   return (
//     <section id="experience">
//       <h5>What Skills I have</h5>
//       <h2>My Experience</h2>

//       <div className="container experience__container">
//         {/* --------------------------------1st sections -------------------------------------------------*/}
//         <div className="experience__frontend">
//           <h3>Frontend Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>HTML</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>CSS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>JavaScript</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>Bootstrap</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>React Js</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcRating className="experience__details-icon" />
//               <div>
//                 <h4>Tailwind CSS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>
//         {/* --------------------------------2nd sections -------------------------------------------------*/}
//         <div className="experience__backend">
//           <h3>Backend Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FcLandscape className="experience__details-icon" />
//               <div>
//                 <h4>NodeJs</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcLandscape className="experience__details-icon" />
//               <div>
//                 <h4>MongoDB</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcLandscape className="experience__details-icon" />
//               <div>
//                 <h4>PHP</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             {/* <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>Django</h4>
//               <small className='text-light'>Intermediate</small>
//               </div>
//             </article> */}
//             <article className="experience__details">
//               <FcLandscape className="experience__details-icon" />
//               <div>
//                 <h4>Laravel</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>
//         {/* --------------------------------3rd sections -------------------------------------------------*/}
//         <div className="experience__frontend">
//           <h3>App Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FcComments className="experience__details-icon" />
//               <div>
//                 <h4>React Native</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcComments className="experience__details-icon" />
//               <div>
//                 <h4>Tailwind CSS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>
//         {/* --------------------------------4th sections -------------------------------------------------*/}
//         <div className="experience__frontend">
//           <h3>UI/UX Design</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FcOk className="experience__details-icon" />
//               <div>
//                 <h4>User Interface</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FcOk className="experience__details-icon" />
//               <div>
//                 <h4>User Experience</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <div className="experience__content-image">
//               <img src={UI} alt="UI-pic" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience

import React, { useEffect, useRef } from 'react';
import './experience.css';
import UI from '../../assets/UIUX.png';
import { FcRating, FcLandscape, FcComments, FcOk } from 'react-icons/fc';

const Experience = () => {
  const leftSections = useRef([]);
  const rightSections = useRef([]);

  // useEffect(() => {
  //   const options = {
  //     threshold: 0.1,
  //   };

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('in-view');
  //       } else {
  //         entry.target.classList.remove('in-view');
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   leftSections.current.forEach((section) => {
  //     if (section) observer.observe(section);
  //   });

  //   rightSections.current.forEach((section) => {
  //     if (section) observer.observe(section);
  //   });

  //   return () => {
  //     leftSections.current.forEach((section) => {
  //       if (section) observer.unobserve(section);
  //     });
  //     rightSections.current.forEach((section) => {
  //       if (section) observer.unobserve(section);
  //     });
  //   };
  // }, []);
  useEffect(() => {
    const options = {
      threshold: 0.1,
    };
  
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Copy ref values to local variables to avoid stale references in cleanup
    const currentLeftSections = leftSections.current;
    const currentRightSections = rightSections.current;
  
    currentLeftSections.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    currentRightSections.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    return () => {
      // Use the local variables in cleanup
      currentLeftSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      currentRightSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* --------------------------------1st sections ----------------------------------------------*/}
        <div
          className="experience__frontend experience__left"
          ref={(el) => leftSections.current.push(el)}
        >
          <h3>UX Research & Strategy</h3>
          
            {/* Your existing skill articles */}
            <div className="experience__content">
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              
              <div>
                <h4>User Research</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              <div>
                <h4>User Personas</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              <div>
                <h4>User Journey Mapping</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              <div>
                <h4>Problem Definition</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              <div>
                <h4>Requirement Analysis</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcRating className="experience__details-icon" />
              <div>
                <h4>Stakeholder Discussion</h4>
              </div>
            </article>
          </div>
        </div>

        {/* --------------------------------2nd sections -------------------------------------------------*/}
        <div
          className="experience__backend experience__right"
          ref={(el) => rightSections.current.push(el)}
        >
          <h3>UX Design Process</h3>
          
            {/* Your existing skill articles */}
            <div className="experience__content">
            <article className="experience__details">
              <FcLandscape className="experience__details-icon" />
              <div>
                <h4>User Flows</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcLandscape className="experience__details-icon" />
              <div>
                <h4>Information Architecture</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcLandscape className="experience__details-icon" />
              <div>
                <h4>Wireframing</h4>
                <small className="text-light">Low, Mid & High Fidelity</small>
              </div>
            </article>
            <article className="experience__details">
              <FcLandscape className="experience__details-icon" />
              <div>
                <h4>Interaction Design</h4>
                
              </div>
            </article>
          </div>
          
        </div>

        {/* --------------------------------3rd sections -------------------------------------------------*/}
        <div
          className="experience__frontend experience__left"
          ref={(el) => leftSections.current.push(el)}
        >
          <h3>UI Design (Visual Skills)</h3>
          
            {/* Your existing skill articles */}
            <div className="experience__content">
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Visual Design</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Layout & Spacing</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Color & Typography</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Responsive Design</h4>
                <small className="text-light">Web/Dashboard/Mobile</small>
              </div>
            </article>
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Design Consistency</h4>
              </div>
            </article>
            <article className="experience__details">
              <FcComments className="experience__details-icon" />
              <div>
                <h4>Component-based Design</h4>
              </div>
            </article>
          </div>
          
        </div>

        {/* --------------------------------4th sections -------------------------------------------------*/}
        <div
          className="experience__frontend experience__right"
          ref={(el) => rightSections.current.push(el)}
        >
          <h3>Design Systems & Collaboration</h3>
          
            {/* Your existing skill articles */}
            <div className="experience__content">
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Design Systems</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Reusable Components</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Style Guides</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Developer Handoff</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Design QA Support</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FcOk className="experience__details-icon" />
              <div>
                <h4>Cross-team Collaboration</h4>
                
              </div>
            </article>
            {/* <div className="experience__content-image">
              <img src={UI} alt="UI-pic" />
            </div> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
