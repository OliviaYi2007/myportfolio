import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { AnimationMixer } from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./squid/scene.gltf");
  const [mixer, setMixer] = useState(null);
  const modelRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const onMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Initialize the animation mixer and play animations
  useEffect(() => {
    if (animations && animations.length > 0) {
      const newMixer = new AnimationMixer(scene);
      animations.forEach((clip) => {
        newMixer.clipAction(clip).play();
      });
      setMixer(newMixer);
    }

    return () => {
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [animations, scene]);

  // Continuously update animation and mouse-controlled rotation
  useFrame(() => {
    if (mixer) {
      mixer.update(0.015); // Ensure animation updates
    }

    if (modelRef.current) {
      modelRef.current.rotation.x = mouse.y * Math.PI / 6;
      modelRef.current.rotation.y = mouse.x * Math.PI / 6;
    }
  });

  // Apply material properties
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.depthWrite = true;
        child.material.side = THREE.FrontSide;
        child.material.metalness = 0.7;
        child.material.roughness = 0.2;
      }
    });
  }, [scene]);

  return (
    <mesh>
      <primitive
        ref={modelRef}
        object={scene}
        scale={isMobile ? 10 : 13}
        position={isMobile ? [0, -3.5, -2] : [0, -3.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Ensure continuous frame loop
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Custom Lights */}
        <ambientLight intensity={8} />
        <directionalLight
          intensity={7}
          position={[5, 5, 5]}
          color={new THREE.Color(0x5e3a8c)} 
          castShadow
        />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={10} position={[5, 5, 5]} />

        {/* Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;