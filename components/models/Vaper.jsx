import React, { useRef } from "react";
import { useGLTF, Html, Billboard } from "@react-three/drei";
import ChemicalCard from "../chemicalCard";
import { motion } from "framer-motion-3d";
import { motion as animator } from "framer-motion";
import { useControls } from "leva";
const VaperModel = ({ selected, setSelected, ...props }) => {
  const { nodes, materials } = useGLTF(
    "/models/vaper-with-bilboards-test2.glb"
  );

  const radius = 0;
  return (
    <group {...props} dispose={null}>
      <motion.group
        initial={{ y: 0, scale: 4 }}
        animate={{ y: -28, scale: 5 }}
        position={[0, -18, 0]}
        transition={{ duration: 3 }}
        scale={4}
      >
        <motion.group
          transition={{ duration: 2, delay: 1 }}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
        >
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.BluePlastic}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Top}
          />
        </motion.group>

        <motion.mesh
          name="top"
          initial={{ y: 0 }}
          animate={{ y: 4 }}
          transition={{ delay: 2 }}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Top}
        />

        <motion.group
          transition={{ delay: 2 }}
          initial={{ y: 0 }}
          animate={{ y: -4 }}
        >
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.BluePlastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tube.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TopBottom.geometry}
            material={materials.Top}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ContainerBottom.geometry}
            material={materials.Top}
          />
        </motion.group>

        <motion.mesh
          transition={{ delay: 2 }}
          initial={{ y: 0 }}
          animate={{ y: 2 }}
          castShadow
          receiveShadow
          geometry={nodes.Container.geometry}
          material={materials.Gas}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Particles.geometry}
          material={materials.BluePlastic}
        >
          <Html
            renderOrder={-10}
            position={[0, 9.2, 0]}
            zIndexRange={[100, -20]}
          >
            {/* <div className=" fixed  right-[22px] top-0 w-24 bg-blue-200 h-[1px] "></div>
          <div className=" fixed  w-[320px] top-[-40px] right-[120px] px-4 py-2 border border-blue-200">
            <p className="text-blue-200">
              E-Cigretees works by heats up the ... contains harmful chemicals
            </p>
          </div> */}
            <animator.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              className="fixed w-20 -translate-x-1/2 -translate-y-1/2    rounded-full h-20 bg-yellow-100"
            ></animator.div>
          </Html>
        </mesh>
      </motion.group>

      {true && (
        <mesh
          castShadow
          position={[0, 18, 0]}
          receiveShadow
          rotation={[0, -1.52, 1.57]}
          scale={2.44}
        >
          <Html
            occlude
            rotation-x={Math.PI * 0.5 + radius}
            rotation-z={Math.PI * 1.5}
            position={[2, -8, 0]}
            transform
          >
            <ChemicalCard
              selected={selected === "voc"}
              onClick={() => setSelected("voc")}
              delay={3}
              type="VOC"
              name="Volatile organic compounds"
              imageSrc="/images/voc.jpg"
            />
          </Html>

          <Html
            rotation-z={Math.PI * 1.5}
            rotation-x={Math.PI * 1.5 + radius}
            occlude
            position={[2, 8, 0]}
            transform
          >
            <ChemicalCard
              selected={selected === "ultra"}
              onClick={() => setSelected("ultra")}
              imageSrc="/images/ultra.png"
              delay={3.2}
              type="PARTICLES"
              name="Ultrafine particles"
            />
          </Html>

          <Html
            rotation-z={Math.PI * 1.5}
            occlude
            rotation-x={radius + Math.PI}
            position={[2, 0, -8]}
            transform
          >
            <ChemicalCard
              selected={selected === "flavorings"}
              onClick={() => setSelected("flavorings")}
              imageSrc="/images/flavorings.jpg"
              delay={3.4}
              type="ADDICTIVE"
              name="Flavorings"
            />
          </Html>

          <Html
            rotation-x={radius}
            rotation-z={Math.PI * 1.5}
            position={[2, 0, 8]}
            transform
          >
            <ChemicalCard
              selected={selected === "nicotine"}
              onClick={() => setSelected("nicotine")}
              imageSrc="/images/nicotine.png"
              delay={3.5}
              type="CHEMICAL"
              name="Nicotine"
            />
          </Html>
        </mesh>
      )}
    </group>
  );
};

useGLTF.preload("/models/vaper-with-bilboards-test2.glb");

export default VaperModel;
