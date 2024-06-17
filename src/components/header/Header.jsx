import React from 'react'
import { useState,useEffect } from 'react'
import {Link} from 'react-scroll'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
// import ME2 from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  // * for Name Animation-----------------------
  const [loopNum,setLoopNum]=useState(0);
  const [isDeleting,setIsDeleting]=useState(false);
  const toRotate =["Web Developer,", "App Developer,","UI/UX Designer,","Content Writer."];
  const [text,setText]=useState('');
  const [delta,setDelta]=useState(100 - Math.random()* 0);
  const period=2000;

  useEffect(()=>{
    let ticker=setInterval(()=>{
      tick();
    },delta)

    return ()=>{ clearInterval(ticker)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[delta, text]);
  const tick = ()=>{
    let i = loopNum % toRotate.length;
    let fullText =toRotate[i];
    let updatedText =isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2);
    }
     if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
     } else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
     }
  }


  //-------------------------------------------------- *





  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Shubhankar Kumar</h1> */}
        {/* <h5 className='text-light'>Full Stack Developer</h5> */}
        {/* <h1>{`Shubhankar Kumar `}<span className='wrap'>{text}</span></h1> */}
        <h1 className='MyName'>Shubhankar Kumar </h1>

        <h2 className='wrap'>🤖.•° <span className='MyPost'>{text}</span></h2>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum atque expedita odit sint laudantium quibusdam illo quos cumque. Est porro adipisci blanditiis officiis aut incidunt architecto nulla tempora! Natus!</p> */}
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='Profile Pic' />
        </div>

        <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className='scroll__down'>Scroll Down</Link>


        {/* <div className='scroll__down'>
          <a href='#contact' >Scroll Down</a>
          <FcNext/>
        </div> */}
      </div>
    </header>
  )
}
export default Header