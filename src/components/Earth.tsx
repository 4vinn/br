//base rotation + scroll rotation----------------------------------------------------------------

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth: React.FC = () => {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "../color33.png",
    "../normal.png",
    "../occlusion.png",
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolling(true); //settingg immediately on scroll start

      clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(() => {
        setIsScrolling(false); // setting aftrr delay when scrollin stops
      }, 10);
    };

    let scrollEndTimeout: NodeJS.Timeout;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimeout);
    };
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={200} />
      <directionalLight intensity={30} position={[11, 0, -0.0]} />
      <EarthMesh
        color={color}
        normal={normal}
        aoMap={aoMap}
        scrollPosition={scrollPosition}
        isScrolling={isScrolling}
      />
    </Canvas>
  );
};

const EarthMesh: React.FC<{
  color: any;
  normal: any;
  aoMap: any;
  scrollPosition: number;
  isScrolling: boolean;
}> = ({ color, normal, aoMap, scrollPosition, isScrolling }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const baseRotationSpeed = 0.7; // base rotation speed

  useFrame((_, delta) => {
    if (meshRef.current) {
      const currentSpeed = isScrolling
        ? baseRotationSpeed * 5
        : baseRotationSpeed;
      meshRef.current.rotation.y += currentSpeed * delta;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};

export default Earth;
