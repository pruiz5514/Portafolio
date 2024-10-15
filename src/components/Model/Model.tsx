"use client"
import { View } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import ModelView from '../ModelView.tsx/ModelView'
import { Canvas } from '@react-three/fiber'

const Model = () => { 

  // model
  const astronaut = useRef (new THREE.Group())

  //rotation
  const [rotation, setRotation] = useState(0);

  return (
    <section className='w-full h-full'>
        <ModelView
            // setRotationState = {setRotation}
        />
    </section>
  )
}

export default Model