import React,{ Suspense }  from 'react';
import { Canvas} from "@react-three/fiber";
// import {  OrbitControls  } from '@react-three/drei';
import Loading from './Loading';
import Chorten from './Threejs/Chorten';
import './ChortenT.css';
function ChortenT() {
  return (
    <div className='chortenT'>
         <Canvas  camera={{position:[5, 5, 5],fov:50}}>
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
            <pointLight position={[0,-10,0]} intensity={0.5}/>
          <Suspense fallback={<Loading/>}>
            <Chorten />
          </Suspense>
          
          {/* <OrbitControls /> */}
        </Canvas>
    </div>
  )
}

export default ChortenT