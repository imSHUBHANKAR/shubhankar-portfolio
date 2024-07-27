// import React from 'react'
// import './Shimmer.css';

// function Shimmer() {
//   return (
//     <div className="main-container shimmer">
//       <div className="container-1">
//         <div className="text-name1"></div>
//         <div className="text-name2"></div>
//         <div className="text-name3"></div>
//       </div>
//       <div className="container-2">
//         <div className="btn1"></div>
//         <div className="btn2"></div>
//       </div>
//       <div className="container-3">
//         <div className="img"></div>
//       </div>
//       <div className="container-4">
//         <div className="navbar"></div>
//       </div>
//     </div>
//   );
// }

// export default Shimmer

import React from "react";
import "./Shimmer.css";

function Shimmer() {
  return (
    <div className="main-container">
      <div className="container-1">
        <div className="text-name1 shimmer"></div>
        <div className="text-name2 shimmer"></div>
        <div className="text-name3 shimmer"></div>
      </div>
      <div className="container-2">
        <div className="btn1 shimmer"></div>
        <div className="btn2 shimmer"></div>
      </div>
      <div className="container-3 shimmer">
        <div className="img"></div>
      </div>
      <div className="container-4">
        <div className="navbar shimmer"></div>
      </div>
    </div>
  );
}

export default Shimmer;
