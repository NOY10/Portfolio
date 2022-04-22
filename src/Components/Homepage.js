import React from 'react';
import "./Homepage.css";
import { Avatar } from '@material-ui/core';
import Aboutme from './AboutMe';
import Animatedpage from './Animatedpage';
import pic from './img/Cool.png';
const propic = () => {
  return (
  <Animatedpage>
    <div className="homepage">
      <div className='hello'>
        <p>Hello, Welcome to My Portfolio</p>
      </div>
      <div className='propic'>
        <p><span style={{fontFamily:'Square Peg, cursive',fontSize:'40px'}}>Lobzang Yonten</span> <br/> 
          <span 
            style={{marginLeft:"100px",fontSize:"30px"}}
            role="img"
            aria-label="emoji name"
          >
            "&#128513;"
          </span>
        </p>
        <Avatar className='me' src={pic} alt=''/>
      </div>

      <Aboutme />

      
    </div>
  </Animatedpage>
    )
};

export default propic;
