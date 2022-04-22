import React from 'react';
import "./Work.css";
import Animatedpage from './Animatedpage';
import Slack from './img/Slack.png';
import Linkedin from './img/linkedin.png';
import Hulu from './img/Hulu.png';
import Whatsapp from './img/whatsapp.png';

const Work = () => {
  return (
        <Animatedpage>
            <div className="work">
                <h1>Clones</h1>
                <div className="works">
                    <div className='info'> 
                        <h2>Slack Clone [Desktop Version]</h2>
                        <a href="https://slack-clone-96342.web.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Slack} alt="slack icon"/>
                        </a>
                    </div>
                    <div className='info'> 
                        <h2>Linkedin Clone [Desktop Version]</h2>
                        <a href="https://linkedin-clone-f072e.web.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Linkedin} alt="linkedin icon"/>
                        </a>
                    </div>
                    
                    <div className='info'>
                        <h3>Hulu Clone</h3>
                        <a href="https://hulu-clone-noy10.vercel.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Hulu} alt="Hulu icon"/>
                        </a>
                    </div>

                    <div className='info'>
                        <h3>Whatsapp Clone [Desktop Version]</h3>
                        <a href="https://whatsapp-2-0-13p69lumu-noy10.vercel.app/" target='_SEJ'  rel='noreferrer'>
                        <img src={Whatsapp} alt="whatsapp icon"/>
                        </a>
                    </div>
                    
                </div>
                
            </div>
        </Animatedpage>
  
    )
};

export default Work;