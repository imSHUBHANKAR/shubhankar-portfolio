import React from 'react'
import './experience.css'
import UI from '../../assets/UIUX.png'
import {FcRating} from 'react-icons/fc'
import {FcLandscape} from 'react-icons/fc'
import {FcComments} from 'react-icons/fc'
import {FcOk} from 'react-icons/fc'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FcRating className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcRating className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small> 
              </div>
            </article>
            <article className='experience__details'>
              <FcRating className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcRating className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcRating className='experience__details-icon'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FcLandscape className='experience__details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcLandscape className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcLandscape className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <FcLandscape className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>App Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FcComments className='experience__details-icon'/>
              <div>
              <h4>Android App</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcComments className='experience__details-icon'/>
              <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Intermediate</small> 
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>UI/UX Design</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <FcOk className='experience__details-icon'/>
              <div>
              <h4>User Interface</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FcOk className='experience__details-icon'/>
              <div>
              <h4>User Experience</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <div className="aexperience__content-image">
              <img src={UI} alt="UI-pic"/>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience