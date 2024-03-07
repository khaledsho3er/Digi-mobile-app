import React from 'react';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber/native';
import {useGLTF} from '@react-three/drei/native';
import modelPath from './karim.glb';

function Model(props) {
  const gltf = useGLTF(modelPath);
  return <primitive {...props} object={gltf.scene} />;
}

export default function App() {
  return (
    <Canvas style={{flex: 1}}>
      {/* Set camera position closer to the scene */}
      <perspectiveCamera position={[0, 0, 5]} fov={75} near={0.1} far={1000} />

      {/* Add directional light for better visibility */}
      <directionalLight intensity={0.5} position={[10, 10, 10]} />

      <Suspense fallback={null}>
        {/* Scale the model to make it bigger */}
        <Model scale={[2, 2, 2]} />
      </Suspense>
    </Canvas>
  );
}
