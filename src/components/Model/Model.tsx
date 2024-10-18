"use client"

// import React, { useRef, useState } from 'react'
// import * as THREE from 'three'
import ModelView from '../ModelView.tsx/ModelView'

const Model = () => { 

  // model
  // const astronaut = useRef (new THREE.Group())

  //rotation
  // const [rotation, setRotation] = useState(0);

  return (
    <section className='w-full h-full'>
        <ModelView
            // setRotationState = {setRotation}
        />
    </section>
  )
}

export default Model