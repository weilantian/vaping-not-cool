import { useHeightfield } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { Color, Float32BufferAttribute } from "three";
import niceColors from "nice-color-palettes";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
export function generateHeightmap({ width, height, number, scale }) {
  const data = [];

  const seedPoints = [];
  for (let i = 0; i < number; i++) {
    seedPoints.push([Math.random(), Math.random()]);
  }

  let max = 0;
  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      let min = Infinity;
      seedPoints.forEach((p) => {
        const distance2 = (p[0] - i / width) ** 2 + (p[1] - j / height) ** 2;
        if (distance2 < min) {
          min = distance2;
        }
      });
      const d = Math.sqrt(min);
      if (d > max) {
        max = d;
      }
      row.push(d);
    }
    data.push(row);
  }

  /* Normalize and scale. */
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      data[i][j] *= scale / max;
    }
  }
  return data;
}

function HeightmapGeometry({ elementSize, heights }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const dx = elementSize;
    const dy = elementSize;

    /* Create the vertex data from the heights. */
    const vertices = heights.flatMap((row, i) =>
      row.flatMap((z, j) => [i * dx, j * dy, z])
    );

    /* Create the faces. */
    const indices = [];
    for (let i = 0; i < heights.length - 1; i++) {
      for (let j = 0; j < heights[i].length - 1; j++) {
        const stride = heights[i].length;
        const index = i * stride + j;
        indices.push(index + 1, index + stride, index + stride + 1);
        indices.push(index + stride, index + 1, index);
      }
    }

    ref.current.setIndex(indices);
    ref.current.setAttribute(
      "position",
      new Float32BufferAttribute(vertices, 3)
    );
    ref.current.computeVertexNormals();
    ref.current.computeBoundingBox();
    ref.current.computeBoundingSphere();
  }, [heights]);

  return <bufferGeometry ref={ref} />;
}

function Heightfield({ elementSize, heights, position, rotation }) {
  const [ref] = useHeightfield(
    () => ({
      args: [
        heights,
        {
          elementSize,
        },
      ],
      position,
      rotation,
    }),
    useRef(null)
  );

  useFrame(({ clock }) => {
    if (clock.elapsedTime < 3) return; //Set color of the heightfield
    //ref.current.material.color.set("red");

    //Lerp color of the heightfield start after 1 second
    ref.current.material.color.lerp(new Color("#1C1B1F"), 0.01);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <meshPhongMaterial color={niceColors[17][4]} />
      <HeightmapGeometry heights={heights} elementSize={elementSize} />
    </mesh>
  );
}

export default Heightfield;
