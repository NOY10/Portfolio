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
        <p><span style={{fontSize:"30px"}}>Lobzang Yonten</span></p>
        <Avatar className='me' src={pic} alt=''/>
      </div>

      <Aboutme />

      
    </div>
  </Animatedpage>
    )
};

export default propic;
