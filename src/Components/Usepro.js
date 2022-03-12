import React from 'react'
import { FaReact} from 'react-icons/fa';
import { SiThreedotjs,SiBlender,SiFirebase} from 'react-icons/si';
// import VideoPlayer from 'react-video-js-player';
// import Mp from './img/video.mp4';
import "./Usepro.css";

function Usepro() {
  return (
    <div className='Usepro'>
    <div className='react'>
    <p>What did I use?? </p>
    <div className='use'>
        <p>React js <FaReact/></p>
        <p>Three js <SiThreedotjs/></p>
        <p>Blender<SiBlender/></p>
        <p>Firebase<SiFirebase/></p>
    </div>

    </div>
    {/* <div className='video'>
        <VideoPlayer
            controls={true}
            src={Mp}
            width="250"
            height="250"
        />
    </div> */}
    
    </div>
  )
}

export default Usepro