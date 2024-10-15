import React, { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import Astronaut from '../Austronaut/Astronaut';
import Lights from '../Lights';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const ModelView = () => {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas className='w-full h-full  border-gray-500'>
        <OrbitControls 
            makeDefault

            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0 ,0)}
        /> 
            <Lights/>
            <Astronaut />
        </Canvas>
      </Suspense>
    </>
  );
};

export default ModelView;