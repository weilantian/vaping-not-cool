import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useMemo, useRef } from "react";
import { Geometry } from "three-stdlib/deprecated/Geometry";

function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    [],
  ];
}

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
