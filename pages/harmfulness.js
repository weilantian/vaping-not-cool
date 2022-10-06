import { Canvas } from "@react-three/fiber";
import MagicCamera from "../components/models/MagicCamera";
import { Physics, useHeightfield, useSphere } from "@react-three/cannon";
import Heightfield, {
  generateHeightmap,
} from "../components/models/LungSurface";

import { motion } from "framer-motion";

import Spheres from "../components/models/Spheres";
import { Scroll, ScrollControls } from "@react-three/drei";

const Harmfulness = () => {
  const scale = 10;
  return (
    <div className="h-screen ">
      <Canvas shadows>
        <color attach="background" args={["#0F1217"]} />
        <MagicCamera />
        <Physics>
          <ScrollControls horizontal damping={4} pages={4} distance={1}>
            <Scroll html>
              <div className="h-screen w-screen relative">
                <motion.div
                  transition={{ duration: 2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="uppercase tracking-wider text-2xl z-10 absolute top-[300px] left-[110px]"
                >
                  <motion.div
                    transition={{ duration: 2 }}
                    initial={{ width: 0 }}
                    animate={{ width: 320 }}
                    className="  border-t border-t-blue-200  absolute r-0 t-[50%] -translate-y-1/2"
                  ></motion.div>
                  Lung inner surfaces
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className=" absolute text-lg z-10 w-[340px] right-[200px] bottom-[220px]"
                >
                  The small particles are trapped in the lung surface and can
                  cause inflammation and damage to the lung tissue.
                </motion.div>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4 }}
                  className=" h-auto w-[240px] absolute z-20 right-[30px] top-[40px]"
                  alt=""
                  src="/images/lung-warn.png"
                />
                <img
                  className=" h-auto w-[240px] absolute z-10 right-[30px] top-[40px]"
                  alt=""
                  src="/images/lung.png"
                />
              </div>
            </Scroll>
          </ScrollControls>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 3, 0]} castShadow />
          <Heightfield
            elementSize={scale / 128}
            heights={generateHeightmap({
              height: 128,
              number: 10,
              scale: 1,
              width: 128,
            })}
            position={[-scale / 2, 0, scale / 2]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <Spheres rows={8} columns={8} spread={2} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Harmfulness;
