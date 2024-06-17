import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/components/pagination/pagination.scss';

const data=[
  {
    avatar: AVTR1,
    name: "Shubh",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?"
  },
  {
    avatar: AVTR2,
    name: "Shubh",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?"
  },
  {
    avatar: AVTR3,
    name: "Shubh",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?"
  },
  {
    avatar: AVTR4,
    name: "Shubh",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?"
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testmonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(( {avatar,name,review},index)=>{
            return(
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avatar'>
                  <img src={avatar} alt='avatar' />
                </div>
                <h5 className='client__review'>{review}</h5>
              </SwiperSlide>
            )

          })
        }



        {/* <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='Avatar1'/>
          </div>
          <h5 className='client__name'>SHubhankar Kumar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?
            </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt='Avatar2'/>
          </div>
          <h5 className='client__name'>SHubhankar Kumar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?
            </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt='Avatar3'/>
          </div>
          <h5 className='client__name'>SHubhankar Kumar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?
            </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt='Avatar4'/>
          </div>
          <h5 className='client__name'>SHubhankar Kumar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore veniam laborum! Sapiente magni nulla quas voluptatibus veritatis sit eligendi?
            </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonial