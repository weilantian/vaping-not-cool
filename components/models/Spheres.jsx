import { useSphere } from "@react-three/cannon";
import { useRef, useMemo } from "react";
import { Color, Float32BufferAttribute } from "three";
import niceColors from "nice-color-palettes";
function Spheres({ columns, rows, spread }) {
  const number = rows * columns;
  const [ref] = useSphere(
    (index) => ({
      args: [0.2],
      mass: 1,
      position: [
        ((index % columns) - (columns - 1) / 2) * spread,
        8,
        (Math.floor(index / columns) - (rows - 1) / 2) * spread,
      ],
    }),
    useRef(null)
  );
  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[undefined, undefined, number]}
    >
      <sphereBufferGeometry args={[0.2, 18, 16]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </sphereBufferGeometry>
      <meshPhongMaterial vertexColors />
    </instancedMesh>
  );
}

export default Spheres;
