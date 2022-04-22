import React from 'react'
import { Html } from '@react-three/drei'
import Spinner from 'react-spinkit'

function Loading() {
 
  return (
    <Html center><Spinner 
    name="ball-spin-fade-loader"
    fadeIn="none"
    color="blue"
    >
    

  </Spinner></Html>
    
     
  )
}

export default Loading