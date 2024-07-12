import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const BubbleTeaAndCookies = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });
  const gltf = useLoader(GLTFLoader, "./bubble_tea_and_cookies.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={0.9}
      ref={ref}
      position={[-1, -1, -1]}
      size={[0, 0, 0]}
    />
  );
};

export default BubbleTeaAndCookies;
