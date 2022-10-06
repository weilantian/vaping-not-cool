import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { usePlane, Physics, Debug } from "@react-three/cannon";
import BasicVaper from "../components/models/Vapers";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";

import { RiExternalLinkFill } from "react-icons/ri";

import {
  IoLink,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import Link from "next/link";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ type: "Static", ...props }), useRef(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[10, 10]} />
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed flex-col flex justify-center items-center w-screen h-screen bg-black bg-opacity-70"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "tween", delay: 2.2 }}
            className=" uppercase text-blue-200 font-light text-center tracking-widest w-[460px] text-7xl"
          >
            quit
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "tween", delay: 2.2 }}
            className=" uppercase text-blue-200 font-light text-center tracking-widest w-[460px] text-7xl"
          >
            today.
          </motion.h1>
        </div>

        <div className=" flex  space-x-4 justify-center mt-8 items-center">
          <motion.a
            rel="noopener noreferrer"
            href="https://www.healthline.com/health/how-to-quit-vaping#motivation"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className=" uppercase flex items-center  hover:bg-opacity-10  px-8 py-4 bg-opacity-20 bg-white tracking-wider"
          >
            learn more
            <RiExternalLinkFill className="ml-2" />
          </motion.a>
          <Link href="/">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className=" uppercase hover:bg-opacity-10  px-8 py-4 bg-opacity-20 bg-white tracking-wider"
            >
              restart
            </motion.a>
          </Link>
        </div>

        <div className="mt-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
            className=" mt-4 px-4 py-2 bg-white flex items-center space-x-6  rounded-full bg-opacity-30"
          >
            <p className=" text-gray-200 uppercase text-sm">Share</p>
            <a href="#">
              <IoLogoFacebook size={24} />
            </a>
            <a href="#">
              <IoLogoInstagram size={24} />
            </a>
            <a href="#">
              <IoLogoTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuitNow;
