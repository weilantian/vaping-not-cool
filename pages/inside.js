import {
  Center,
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import VaperModel from "../components/models/Vaper";

import { motion } from "framer-motion";
import { useControls } from "leva";

//当用户选择了一个chemical，他们可以在右侧的view了解对他们身体的危害。每个物质都有一个isActive来判断用户现在是否选中了他们，通过hover可以hover出每个物质的介绍

const WhatIsInside = () => {
  const ref = useRef();

  return (
    <div className="grid  grid-cols-2 h-full">
      <div className="cursor-grab col-span-1">
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 60, 0] }}
        >
          <Center>
            <VaperModel />
          </Center>

          <Environment preset="dawn" />

          <OrbitControls
            autoRotate
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            camera={ref.current}
            enablePan={false}
          />
        </Canvas>
      </div>

      <div className=" col-span-1">
        <h1>A e-cigarette releases harmful chemicals.</h1>
        <p>在此处显示默认的</p>
      </div>
    </div>
  );
};

export default WhatIsInside;
