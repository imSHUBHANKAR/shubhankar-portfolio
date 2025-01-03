// import React, { useState, useEffect } from 'react'
// import './app.css'
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Nav from './components/nav/Nav'
// // import About from './components/about/About'
// import Experience from './components/Exprience/Experience'
// import Service from './components/services/Service'
// import Portfolio from './components/portfolio/Portfolio'
// import Testimonial from './components/Testimonial/Testimonial'
// import Contact from './components/contact/Contact'
// // import tools from './components/Tools/tools'
// import AboutUs from './components/aboutUs/About'
// import Shimmer from './components/Shimmer'

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay of 2 seconds
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     // Clean up the timer
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="skeleton-loader">
//         <Shimmer />
//       </div>
//     );
//   }

//   return (
//     <>
//     {/* <Shimmer/> */}
//     <Header/>
//     <Nav/>
//     {/* <About/> */}
//     <AboutUs/>
//     <Experience/>
//     <Service/>
//     <Portfolio/>
//     <Testimonial/>
//     <Contact/>
//     {/* <tools/> */}
//     <Footer/>
//     </>
//   )
// }

// export default App
//above code is working fine but giving error when running long time in chrome
//----------other way to handle the error-------
import React, { useState, useEffect } from 'react'
import './app.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Experience from './components/Exprience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/contact/Contact'
import AboutUs from './components/aboutUs/About'
import Shimmer from './components/Shimmer'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // Add this block to suppress the ResizeObserver warning
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
          e.stopImmediatePropagation();
        }
      });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="skeleton-loader">
        <Shimmer />
      </div>
    );
  }

  return (
    <>
      <Header/>
      <Nav/>
      <AboutUs/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
