// import React from 'react'
// import './contact.css'
// import {FcFeedback} from 'react-icons/fc'
// import {FaLinkedinIn} from 'react-icons/fa'
// import {FaTelegramPlane} from 'react-icons/fa'
// import {BsWhatsapp,BsInstagram}  from 'react-icons/bs'
// import {FcSms} from 'react-icons/fc'
// // import {BsWhatsapp} from 'react-icons/bs'
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'

// const Contact = () => {

//   const form =useRef();

//   // function for sending email----------------------- 
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_4wtd36h', 'template_y3k9bcd', form.current, 'X-bEb920oma8EANt1')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };


//   // -----------------------------------------------------------------
//   return (
//     <section id='contact'>
//       <h5>Get In Touch</h5>
//       <h2>Contact</h2>

//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <FcFeedback className='contact__option-icon'style={{color:"#DB4437"}}/>
//             <h4>Email</h4>
//             <h5>shubhankar.kr24@gmail.com</h5>
//             <a href='mailto:shubhankar.kr24@gmail.com' >Send a mesaage</a>
//           </article>

//           <article className="contact__option">
//             <FaLinkedinIn className='contact__option-icon' style={{color:"#0072b1"}}/>
//             <h4>LinkedIn</h4>
//             <h5>Shubhankar Kumar</h5>
//             <a href='https://www.linkedin.com/in/shubhankar-kumar-2360b41ba/' rel="noopener noreferrer" target='_blank' >Send a mesaage</a>
//           </article>

//           <article className="contact__option">
//             <BsWhatsapp className='contact__option-icon' style={{color: "#25D366"}}/>
//             <h4>What's App</h4>
//             <h5>+91 7808709989</h5>
//             <a href='https://api.whatsapp.com/send?phone=7808709989' rel="noopener noreferrer" target='_blank'>Send a mesaage</a>
//           </article>

//           <article className="contact__option">
//             <FaTelegramPlane className='contact__option-icon' style={{color:"#0088cc"}}/>
//             <h4>Telegram</h4>
//             <h5>@Mr_shubh_ji</h5>
//             <a href='https://telegram.me/Mr_shubh_ji' rel="noopener noreferrer" target='_blank'>Send a mesaage</a>
//           </article>

//           <article className="contact__option">
//             <BsInstagram className='contact__option-icon' style={{color:"#fbad50"}}/>
//             <h4>Instagram</h4>
//             <h5>mr_shubhankar24</h5>
//             <a href='https://www.instagram.com/mr_shubhankar24/' rel="noopener noreferrer" target='_blank'>Send a mesaage</a>
//           </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type='text' name='name' placeholder='Your full name' required/>
//           <input type='email' name='email' placeholder='Your Email' required/>
//           <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
//           <button type='submit' className='btn btn-primary'>Send Message <FcSms style={{color: "#16A2F9", size: '20'}}/></button>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Contact
import React from 'react'
import './contact.css'
import {FcFeedback} from 'react-icons/fc'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp,BsInstagram}  from 'react-icons/bs'
import {FcSms} from 'react-icons/fc'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'  // Import toast
import 'react-toastify/dist/ReactToastify.css'          // Import CSS for toast

const Contact = () => {

  const form = useRef();

  // Function for sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wtd36h', 'template_y3k9bcd', form.current, 'X-bEb920oma8EANt1')
      .then((result) => {
          console.log(result.text);
          // Show success toast notification
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }, (error) => {
          console.log(error.text);
          // Show error toast notification
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FcFeedback className='contact__option-icon' style={{color:"#DB4437"}}/>
            <h4>Email</h4>
            <h5>shubhankar.kr24@gmail.com</h5>
            <a href='mailto:shubhankar.kr24@gmail.com' >Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedinIn className='contact__option-icon' style={{color:"#0072b1"}}/>
            <h4>LinkedIn</h4>
            <h5>Shubhankar Kumar</h5>
            <a href='https://www.linkedin.com/in/shubhankar-kumar-2360b41ba/' rel="noopener noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' style={{color: "#25D366"}}/>
            <h4>What's App</h4>
            <h5>+91 7808709989</h5>
            <a href='https://api.whatsapp.com/send?phone=7808709989' rel="noopener noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon' style={{color:"#0088cc"}}/>
            <h4>Telegram</h4>
            <h5>@Mr_shubh_ji</h5>
            <a href='https://telegram.me/Mr_shubh_ji' rel="noopener noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon' style={{color:"#fbad50"}}/>
            <h4>Instagram</h4>
            <h5>mr_shubhankar24</h5>
            <a href='https://www.instagram.com/mr_shubhankar24/' rel="noopener noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message <FcSms style={{color: "#16A2F9", size: '20'}}/></button>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer to display toast notifications */}
    </section>
  )
}

export default Contact
