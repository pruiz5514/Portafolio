import React, { Suspense } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import Astronaut from '../Austronaut/Astronaut';
import Lights from '../Lights';
import { OrbitControls } from '@react-three/drei';

const ModelView = () => {
  return (
    <Suspense fallback={<div className= 'flex justify-center text-white'>Loading...</div>}>
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
        <group position={[0, -1.4, 0]} scale={[1.5, 1.5, 1.5]}>
          <Astronaut />
        </group>
      </Canvas>
    </Suspense>
  );
};

export default ModelView;