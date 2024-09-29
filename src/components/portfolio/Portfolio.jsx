import React from 'react'
import './portfolio.css'
import {FcBinoculars} from 'react-icons/fc'

// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
// import wrk6 from '../../assets/Work6.png'
import Figma1 from "../../assets/Figma1.png"
import Figma2 from "../../assets/Figma2.png"
import Figma3 from "../../assets/Figma3.png"
import Figma4 from "../../assets/Figma4.png"
import Figma5 from "../../assets/Figma5.png"
import Figma6 from "../../assets/Figma6.png"
import Figma7 from "../../assets/Figma7.png"
import Figma8 from "../../assets/Figma8.png"



//this is used for getting smae type of element, 
//But I have used different element. That why I didn't use this array
// const data=[
//   {
//     id:1,
//     image:wrk6,
//     title:'QR Code on Card (new concept)',
//     Figma:'https://www.figma.com/file/UGNe73X4aoAL3MddMDgqFn/LoginPage?type=design&node-id=0-1&mode=design&t=A55osG87L7FiFSkL-0',
//     demo:''
//   },
//   {
//     id:2,
//     image:IMG2,
//     title:'Shubh Work 5',
//     github:'',
//     demo:''
//   },
//   {
//     id:3,
//     image:IMG3,
//     title:'Shubh Work 4',
//     github:'',
//     demo:''
//   },
//   {
//     id:4,
//     image:IMG4,
//     title:'Shubh Work 3',
//     github:'',
//     demo:''
//   },
//   {
//     id:5,
//     image:IMG5,
//     title:'Shubh Work 2',
//     github:'',
//     demo:''
//   },{
//     id:6,
//     image:IMG6,
//     title:'Shubh Work 1',
//     github:'',
//     demo:''
//   },{
//     id:7,
//     image:wrk6,
//     title:'Shubh Work 7',
//     github:'',
//     demo:''
//   }
// ]



const Portfolio = () => {
  return (
    
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {/* {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cts">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        } */}



        {/* We can write also the below code but it will became very big. So we are using array as above */}
        <article className='portfolio__item portfolio__left'>
          <div className="portfolio__item-image">
            <img src={Figma8} alt=''/>
          </div>
          <h3>Dashboard in React using Tailwind CSS</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/design/v3NUjY8xx7yf9LXCJrBXSg/Dashboard?node-id=0-1&t=370mWoktDeV4gex0-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://www.figma.com/design/v3NUjY8xx7yf9LXCJrBXSg/Dashboard?node-id=0-1&t=370mWoktDeV4gex0-1' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Figma7} alt=''/>
          </div>
          <h3>React Website</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/design/i7rd86qLNPTp2VHakVQ4zq/Finstreet?node-id=0-1&t=2G5DuJRXi0nDYpFQ-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://shubh-finance-website.vercel.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>
          

        </article>
         <article className='portfolio__item experience__right'>
          <div className="portfolio__item-image">
            <img src={Figma1} alt=''/>
          </div>
          <h3>Academic Website (UI/UX)</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/file/JVu5UEOl84C2g6uPI2Ubsr/CforCoding?type=design&node-id=0%3A1&mode=design&t=rA92nz6Zuo0N8iHr-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://www.figma.com/proto/JVu5UEOl84C2g6uPI2Ubsr/CforCoding?type=design&node-id=21-426&t=rA92nz6Zuo0N8iHr-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=21%3A426' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>




          {/* <div className='pandaContainer'>
            <div class="ear-l"></div>
            <div class="ear-r"></div>
            <div class="panda-face">
              <div class="blush-l"></div>
              <div class="blush-r"></div>
              <div class="eye-l">
                <div class="eyeball-l"></div>
              </div>
              <div class="eye-r">
                <div class="eyeball-r"></div>
              </div>
              <div class="nose"></div>
              <div class="mouth"></div>
            </div>
            <div class="hand-l"></div>
            <div class="hand-r"></div>
            <div class="paw-l"></div>
            <div class="paw-r"></div>
          </div> */}

        </article>

        <article className='portfolio__item portfolio__left'>
          <div className="portfolio__item-image">
            <img src={Figma2} alt=''/>
          </div>
          <h3>Debit/Credit Card Based on QR Code (UI/UX)</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/file/fbVUAiqoD1S3mWVKUZRJZE/Debit%2FCredit-Card?type=design&node-id=0%3A1&mode=design&t=PXhu27ET2FbhV6Yn-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://www.figma.com/proto/fbVUAiqoD1S3mWVKUZRJZE/Debit%2FCredit-Card?type=design&node-id=10-64&t=PXhu27ET2FbhV6Yn-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A64' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>
          

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Figma3} alt=''/>
          </div>
          <h3>Music App System (UI/UX)</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/file/o1k8g3s7w0D6iI4Qq3DnCV/MusicPlayer?type=design&node-id=0%3A1&mode=design&t=RXsiEoiMmu1q256Y-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://www.figma.com/proto/o1k8g3s7w0D6iI4Qq3DnCV/MusicPlayer?type=design&node-id=20-7&t=Fr9s2ZJmgiefChGG-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A7&mode=design' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>

        </article>

        <article className='portfolio__item experience__right'>
          <div className="portfolio__item-image">
            <img src={Figma4} alt=''/>
          </div>
          <h3>E-commerce Website Design (UI/UX)</h3>
          <div className="portfolio__item-cts">
            <a href='https://www.figma.com/file/UGNe73X4aoAL3MddMDgqFn/LoginPage?type=design&node-id=0%3A1&mode=design&t=yAXG8UdM1UyScpdT-1' className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href='https://www.figma.com/proto/UGNe73X4aoAL3MddMDgqFn/LoginPage?type=design&node-id=2-10&t=3cJmxk7dZh3E9jjh-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A10&mode=design' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>

        </article>

        <article className='portfolio__item portfolio__left'>
          <div className="portfolio__item-image">
            <img src={Figma5} alt=''/>
          </div>
          <h3>Blog Website using HTML/CSS/JavaScript </h3>
          <div className="portfolio__item-cts">
            <a href='https://github.com' className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>

        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Figma6} alt=''/>
          </div>
          <h3>E-commerce Website using 'MERN'</h3>
          <div className="portfolio__item-cts">
            <a href='https://github.com' className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo <FcBinoculars/></a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Portfolio;