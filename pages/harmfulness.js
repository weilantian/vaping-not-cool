import { Canvas } from "@react-three/fiber";
import MagicCamera from "../components/models/MagicCamera";
import { Physics, useHeightfield, useSphere } from "@react-three/cannon";
import Heightfield, {
  generateHeightmap,
} from "../components/models/LungSurface";

import Spheres from "../components/models/Spheres";

const Harmfulness = () => {
  const scale = 10;
  return (
    <div className="h-full">
      <Canvas shadows>
        <color attach="background" args={["black"]} />
        <MagicCamera />
        <Physics>
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
