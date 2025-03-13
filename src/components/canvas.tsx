import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "./loader";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { Model } from "@/models/damaged-helmet";

const TCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 40 }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} autoRotate />

        <Float>
          <Model />
        </Float>

        <Environment preset="city" />
      </Suspense>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={400}
          opacity={1}
        ></Bloom>
        <Noise opacity={0.01} blendFunction={THREE.AdditiveBlending} />
      </EffectComposer>
    </Canvas>
  );
};

export default TCanvas;
