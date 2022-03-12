import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import Spinner from 'react-spinkit'

function Loading() {
  const progress = useProgress()
 
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