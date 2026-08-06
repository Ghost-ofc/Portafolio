"use client";

// Modelo: "Laptop / MacBook Pro" por Alex Safayan (poly.pizza/m/27hcX_w47Jb), licencia CC-BY.
// La licencia exige atribución visible en algún lugar del sitio publicado.
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

function LaptopModel(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/laptop.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/laptop.glb");

export function LaptopScene() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-primary/25 blur-[80px]"
      />
      <Canvas
        camera={{ position: [4.6, 2.8, 6.4], fov: 28 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 4]} intensity={1.4} color="#8CFFC0" />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#22c55e" />
        <Suspense fallback={null}>
          <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.7}>
            <LaptopModel
              scale={1}
              position={[0, -0.2, 0]}
              rotation={[0.1, -0.7, 0]}
            />
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.1}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
