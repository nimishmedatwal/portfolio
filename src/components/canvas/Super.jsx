import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Super = () => {
  const supernova = useGLTF("./supernova/scene.gltf");

  return (
    <primitive object={supernova.scene} scale={2.5} position-x={0} position-y={0} position-z={0}  />
  );
};

const SuperCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 120,
        near: 0.4,
        far: 200,
        position: [-2, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          
        />
        <Super />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SuperCanvas;
