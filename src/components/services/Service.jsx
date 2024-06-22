import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
            <span>
              <div class="hand">
                <span class="finger thumb"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="palm"></span>
              </div>
            </span>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframe</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Typography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototype</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Color Combination</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Case Study</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile First Responsive Design Services</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Design */}

        <article className='service'>
          <div className="services__head">
            <h3>Web Development</h3>
            <div class="hand">
              <span class="finger thumb"></span>
              <span class="finger"></span>
              <span class="finger"></span>
              <span class="finger"></span>
              <span class="finger"></span>
              <span class="palm"></span>
            </div>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-End Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-End Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Website Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile-Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintenance and Support.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="services__head">
            <h3>Content Creation</h3>
            <span>
              <div class="hand">
                <span class="finger thumb"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="finger"></span>
                <span class="palm"></span>
              </div>
            </span>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Post Writing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Content Writing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product Descriptions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Academic Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Health and Wellness Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Food and Recipe Writing</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Service