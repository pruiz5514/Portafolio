import './ModelView.scss'
import React, { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import Astronaut from '../Austronaut/Astronaut';
import Lights from '../Lights';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const ModelView = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas style={{ height: '500px' }}>
        <OrbitControls
          makeDefault
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)} 
        />

        <Lights />

        {/* Ajuste de posición y escala del Astronaut */}
        <group position={[0, -1.8, 0]} scale={[1.5, 1.5, 1.5]}>
          <Astronaut />
        </group>
      </Canvas>
    </Suspense>
  );
};

export default ModelView;