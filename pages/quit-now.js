import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import { usePlane, Physics, Debug } from "@react-three/cannon";
import BasicVaper from "../components/models/Vapers";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ type: "Static", ...props }), useRef(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[10, 10]} />
      <meshReflectorMaterial />
      <shadowMaterial color="#727883" />
    </mesh>
  );
};

const QuitNow = () => {
  return (
    <section className=" relative">
      <div className=" -z-10 left-0 top-0 w-screen h-screen absolute">
        <Canvas shadows camera={{ fov: 50, position: [-1, 20, 40] }}>
          <color attach="background" args={["#000"]} />
          <directionalLight position={[0, 3, 0]} castShadow />

          <Suspense fallback={null}>
            <Physics gravity={[0, -3, 0]}>
              <group>
                <Plane rotation={[-Math.PI / 2, 0, 0]} />

                {Array.from({ length: 30 }, (v, i) => (
                  <BasicVaper
                    key={i}
                    position={[0, 15 + i * 3, 0]}
                    rotation={[0.5, 0.4 + i * 0.5 * Math.PI, -1]}
                  />
                ))}

                {Array.from({ length: 4 }, (v, i) => (
                  <BasicVaper
                    key={i}
                    position={[0, 1 + i, 0]}
                    rotation={[0.5, 0.4 + i * 0.5 * Math.PI, -1]}
                  />
                ))}

                {/* <Debug color="black" scale={1.1}>
                  <BasicVaper position={[1, 5, 0]} rotation={[0.5, 0.4, -1]} />
                </Debug> */}
              </group>
            </Physics>
          </Suspense>
        </Canvas>
      </div>
      <div>foisdajflkdsajkfldsajkfhdsk</div>
    </section>
  );
};

export default QuitNow;
