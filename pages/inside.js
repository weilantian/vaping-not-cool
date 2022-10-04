import {
  Center,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import VaperModel from "../components/models/Vaper";

const WhatIsInside = () => {
  const ref = useRef();
  return (
    <div className="h-full">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 50, 0] }}>
        <Center>
          <VaperModel />
        </Center>

        <OrbitControls
          autoRotate
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          camera={ref.current}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default WhatIsInside;
