import React from 'react';
import "./Work.css";
import Animatedpage from './Animatedpage';
import Slack from './img/Slack.png';
import Linkedin from './img/linkedin.png';

const Work = () => {
  return (
        <Animatedpage>
            <div className="work">
                <div className="works">
                    <h1>Clones</h1>
                    
                    <h2>Slack Clone [Desktop Version]</h2>
                    <div className='slack'>
                        <a href="https://slack-clone-96342.web.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Slack} alt="slack icon"/>
                        </a>
                    </div>
                    <h2>Linkedin Clone [Desktop Version]</h2>
                    <div className='linkedin'>
                        <a href="https://linkedin-clone-f072e.web.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Linkedin} alt="linkedin icon"/>
                        </a>
                    </div>
                    
                </div>
                
            </div>
        </Animatedpage>
  
    )
};

export default Work;