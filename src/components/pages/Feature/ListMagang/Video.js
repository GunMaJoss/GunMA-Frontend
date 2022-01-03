import React from 'react';
import List from './List'
// import { Button } from '../../../Button';
import './Video.css';
import styled from 'styled-components';

const Button = styled.a`
  margin-left: 10px;
  border-radius: 18px;
  margin-top: 30px;
  width: 180px;
  height: 51px;
  line-height: 71px;
  font-size: 18px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  outline: none;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  font-size: 15px;
  padding: 12px 20px;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: var(--warning);
    color: #fff;
    border-radius: 20px;
    border: 2px solid var(--warning);
  }
  
`;

function Video() {
  return (
    <div className='video-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <img src="images/logo10.png"></img>
      {/* <h1>GUNMA</h1> */}
      <br/>   <br/>  
      <p>What are you waiting for?</p>
      <div className='video-btns'>
        {/* <Button href='https://play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank'>
          GET STARTED
        </Button > */}
        <Button href='https://play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank'>
            <span>Get Mobile Version </span>
          </Button>
         
        <Button 
         href='https://www.youtube.com/embed/WMo-lk0YuFw' target='_blank'>
        
          Watch Trailer <i className='far fa-play-circle' />
        </Button>

       
      </div>
    </div>
     
  );
  
}

export default Video;


// import React from 'react';
// //  import '../App.css';
// // import { Button } from '../../../Button';
// import './Video.css';
// import styled from 'styled-components';

// const Button = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 18px;
//   margin-top: 30px;
//   width: 180px;
//   height: 51px;
//   line-height: 71px;
//   font-size: 18px;
//   text-align: center;
//   color: #000000;
//   cursor: pointer;
//   background: #FAE57C;
//   text-decoration: none;
//   box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
// `;

// function Video() {

//   return (
//     <div className='video-container'>
//       <video src='/videos/video-1.mp4' autoPlay loop muted />
//       <h1>GUNMA</h1>
//       <p>What are you waiting for?</p>
//       <div className='video-btns'>
//         {/* <Button href='https://play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank'>
//           GET STARTED
//         </Button > */}
//         <Button href='https://play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank'>
//             <span>Get mobile version</span>
          
//           </Button>
//         <Button 
//          href='https://www.youtube.com/embed/WMo-lk0YuFw' target='_blank'>
        
//           Watch Trailer <i className='far fa-play-circle' />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Video;