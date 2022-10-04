import React, { useRef } from "react";
import { useGLTF, Html, Billboard } from "@react-three/drei";
import ChemicalCard from "../chemicalCard";
const VaperModel = (props) => {
  const { nodes, materials } = useGLTF(
    "/models/vaper-with-bilboards-test2.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[0, -18, 0]} scale={4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.BluePlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.BluePlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ContainerBottom.geometry}
          material={materials.Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container.geometry}
          material={materials.Gas}
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
          geometry={nodes.Particles.geometry}
          material={materials.BluePlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TopBottom.geometry}
          material={materials.Top}
        />
      </group>

      <mesh castShadow receiveShadow rotation={[0, -1.52, 1.57]} scale={2.44}>
        <Html
          occlude
          rotation-x={Math.PI * 0.5}
          rotation-z={Math.PI * 1.5}
          position={[2, -8, 0]}
          transform
        >
          <ChemicalCard
            type="Volatile compounds"
            name="Volatile organic compounds"
            description="Volatile organic compounds are organic chemicals that have a high vapour pressure at room temperature."
            causing="Exposure to VOCs themselves can cause a variety of health effects, including irritation to the eyes, nose, and throat; headaches and the loss of coordination; nausea; and damage to the liver, kidneys, or central nervous system. Some VOCs are suspected or proven carcinogens."
          />
        </Html>

        <Html
          rotation-z={Math.PI * 1.5}
          rotation-x={Math.PI * 0.5}
          occlude
          position={[2, 8, 0]}
          transform
        >
          <ChemicalCard
            type="Volatile compounds"
            name="Volatile organic compounds"
            description="Volatile organic compounds are organic chemicals that have a high vapour pressure at room temperature."
            causing="Exposure to VOCs themselves can cause a variety of health effects, including irritation to the eyes, nose, and throat; headaches and the loss of coordination; nausea; and damage to the liver, kidneys, or central nervous system. Some VOCs are suspected or proven carcinogens."
          />
        </Html>

        <Html
          rotation-z={Math.PI * 1.5}
          occlude
          position={[2, 0, -8]}
          transform
        >
          <ChemicalCard
            type="Volatile compounds"
            name="Volatile organic compounds"
            description="Volatile organic compounds are organic chemicals that have a high vapour pressure at room temperature."
            causing="Exposure to VOCs themselves can cause a variety of health effects, including irritation to the eyes, nose, and throat; headaches and the loss of coordination; nausea; and damage to the liver, kidneys, or central nervous system. Some VOCs are suspected or proven carcinogens."
          />
        </Html>

        <Html rotation-z={Math.PI * 1.5} position={[2, 0, 8]} transform>
          <ChemicalCard
            type="Volatile compounds"
            name="Volatile organic compounds"
            description="Volatile organic compounds are organic chemicals that have a high vapour pressure at room temperature."
            causing="Exposure to VOCs themselves can cause a variety of health effects, including irritation to the eyes, nose, and throat; headaches and the loss of coordination; nausea; and damage to the liver, kidneys, or central nervous system. Some VOCs are suspected or proven carcinogens."
          />
        </Html>
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/vaper-with-bilboards-test2.glb");

export default VaperModel;
