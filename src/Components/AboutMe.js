import React,  { Suspense } from 'react';
import { Canvas} from "@react-three/fiber";
import "./Aboutme.css";
import Greeting from './Threejs/Greeting';
import Loading from './Loading';
import { BsFillSuitHeartFill} from 'react-icons/bs';



const aboutMe = () => {
  
  return(
      <div className="aboutMe">
        <div className="greeting">
        <Canvas  camera={{position:[15, 5, 5],fov:7}}>
        <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0,10,0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <pointLight position={[-10,0,-20]} intensity={0.5}/>

          <Suspense fallback={<Loading/>}>
            <Greeting />
          </Suspense>
          
        </Canvas>
          
          
        </div>
        
        <div className="Intro">
          <h2>About</h2>        
          <p>Lobzang Yonten is an undergraduate student in College of Science and Technology pursuing B.E. in Information Technology.</p>

         <p> I <BsFillSuitHeartFill className='heart'/> </p>

         <p style={{marginLeft:"40px"}}>Music, Photography, Chess[<a href='https://chess.com/play/Yonten2001' target='_SEJ'  rel='noreferrer' style={{color:'red'}}>Challenge Me</a>], Web and App Development, Gaming and Anime. </p>
         
        </div>
        
      </div>
    
      
  )
};

export default aboutMe;
