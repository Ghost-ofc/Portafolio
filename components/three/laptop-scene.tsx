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
    <div className="relative aspect-square w-full max-w-lg" aria-hidden="true">
      {/* Amber glow behind the model */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 blur-[90px]"
      />
      <Canvas
        camera={{ position: [4.6, 2.8, 6.4], fov: 28 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        frameloop="demand"
      >
        <ambientLight intensity={0.6} />
        {/* Amber key light */}
        <directionalLight position={[4, 5, 4]} intensity={1.6} color="#F59E0B" />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#FCD34D" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.65}>
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
          autoRotateSpeed={0.9}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.1}
          touches={{ ONE: 0, TWO: 0 }}
        />
      </Canvas>
    </div>
  );
}
