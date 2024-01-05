import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const BasicVaper = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF(
    "/models/vaper-with-bilboards-test2.glb"
  );

  const [ref, { at }] = useBox(() => ({
    args: [1, 9, 1],
    position: [position[0], position[1] + 10, position[2]],
    rotation,
    mass: 1,
  }));

  return (
    <group {...{ ref, position }} dispose={null}>
      <group position={[0, -6, 0]}>
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
    </group>
  );
};

useGLTF.preload("/models/vaper-with-bilboards-test2.glb");

export default BasicVaper;
