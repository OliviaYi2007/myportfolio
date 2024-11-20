import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/squid/scene.gltf');
  const [mixer, setMixer] = useState(null);
  const modelRef = useRef();

  // Initialize animation mixer for squid
  useEffect(() => {
    if (earth.animations && earth.animations.length > 0) {
      const newMixer = new AnimationMixer(earth.scene);
      earth.animations.forEach((clip) => {
        newMixer.clipAction(clip).play();
      });
      setMixer(newMixer);
    }

    return () => {
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [earth.animations]);

  // Update animation on each frame
  useFrame(() => {
    if (mixer) {
      mixer.update(0.015); // update animation
    }
  });

  // Apply metallic material to all meshes in the model
  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh) {
          // Apply metallic and roughness
          child.material.metalness = 0.8; // Make it metallic
          child.material.roughness = 0.2; // Smooth surface
          child.material.needsUpdate = true; // Make sure material updates
        }
      });
    }
  }, [earth.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[0, 0.9, 0]} castShadow />
      
      {/* Add purple directional light */}
      <directionalLight
        intensity={10}
        position={[5, 5, 5]}
        color={0x5e3a8c} // Purple color
        castShadow
      />

      <primitive
        ref={modelRef}
        object={earth.scene}
        scale={5} 
        position-y={-0.2}  
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.25}  // Rotate speed
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;