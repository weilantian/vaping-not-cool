import {
  Center,
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import VaperModel from "../components/models/Vaper";

import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import ChemicalInfoBlock from "../components/chemicalInfoBlock";

const WhatIsInside = () => {
  const ref = useRef();

  const [selected, setSelected] = useState("nicotine");
  const cachedSelected = useRef(selected);

  const t1 = useRef();

  const init = useRef(false);

  const factCheckAnimateVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="grid overflow-y-hidden   grid-cols-2 h-full">
      <div className="cursor-grab col-span-1">
        <Canvas
          camera={{
            fov: 50,
            near: 0.1,
            far: 1000,
            position: [0, 90, 0],
          }}
        >
          <VaperModel
            position={[0, -20, 0]}
            selected={selected}
            setSelected={setSelected}
          />

          <Environment preset="dawn" />

          <OrbitControls
            autoRotate
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            camera={ref.current}
            enablePan={false}
          />
        </Canvas>
      </div>

      <motion.div
        transition={{ staggerChildren: 0.5 }}
        className=" flex   flex-col h-[80vh] relative  mt-8 col-span-1"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
          }}
          className=" absolute h-32 w-full z-10 bottom-0 left-0"
        ></div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=" uppercase tracking-wider text-blue-200 w-[340px] text-3xl"
          >
            A e-cigarette releases harmful chemicals.
          </motion.h1>

          <div className="  pt-8  pb-8 px-4 border-gray-600 mr-6 mt-12 border-b border-t">
            <AnimatePresence mode="wait">
              {selected === "nicotine" && (
                <ChemicalInfoBlock
                  imgSrc={"/images/nicotine.png"}
                  intro="Nicotine is a dangerous and highly addictive chemical. It can cause an increase in blood pressure, heart rate, flow of blood to the heart and a narrowing of the arteries (vessels that carry blood). Nicotine may also contribute to the hardening of the arterial walls, which in turn, may lead to a heart attack."
                  name={"Nicotine"}
                />
              )}

              {selected === "flavorings" && (
                <ChemicalInfoBlock
                  imgSrc={"/images/flavorings.jpg"}
                  intro="Flavorings such as diacetyl, a chemical linked to a serious lung disease."
                  name={"Flavorings"}
                />
              )}

              {selected === "ultra" && (
                <ChemicalInfoBlock
                  imgSrc={"/images/ultra.png"}
                  intro="The ultrafine particles releases by the e-cigarettes can be inhaled deeply into the lungs."
                  name={"Ultrafine particles"}
                />
              )}

              {selected === "voc" && (
                <ChemicalInfoBlock
                  imgSrc={"/images/voc.jpg"}
                  intro="Exposure to VOCs themselves can cause a variety of health effects, including irritation to the eyes, nose, and throat; headaches and the loss of coordination; nausea; and damage to the liver, kidneys, or central nervous system. Some VOCs are suspected or proven carcinogens."
                  name={"Volatile organic compounds"}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="overflow-y-scroll pb-20 px-4 flex-1 h-full ">
          <h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-2xl tracking-wider uppercase text-blue-300"
          >
            Fact Check
          </h3>
          <motion.div
            variants={factCheckAnimateVariants}
            initial="hidden"
            animate="visible"
            className=" mt-2 grid  gap-4 w-full grid-cols-12"
          >
            <FactCard
              title=" Vaping cause lung cancer and lung disease"
              description="Vaping is the leading cause of lung cancer deaths. In
                  addition, vaping causes lung diseases, such as emphysema and
                  chronic bronchitis. Smoking also makes asthma worse."
              imgSrc="/images/icons/lung.png"
            />
            <FactCard
              imgSrc="/images/icons/eye.png"
              description=" Vaping can increase your risk of serious eye problems such as
                  cataracts and loss of eyesight from macular degeneration."
              title="Vaping cause Eye problems"
            />
            <FactCard
              large
              title="Vaping cause Heart and circulatory system problems"
              description="  Vaping intake will leads to heart and blood vessel
                  (cardiovascular) disease, including heart attacks and strokes.
                  If you have heart or blood vessel disease, such as heart
                  failure, smoking worsens your condition."
              imgSrc={"/images/icons/heart.png"}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const FactCard = ({ title, description, imgSrc, large }) => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring" },
    },
  };
  return (
    <motion.div
      key={title}
      variants={variants}
      className={` ${
        large ? "col-span-12" : "col-span-6"
      } pl-4 py-4  border-gray-500 transition-all duration-75 hover:border-blue-200 border-2`}
    >
      <img className="w-20 h-20" src={imgSrc} />
      <div className={` mt-4  ${large ? " w-[60%]" : "w-[80%]"}`}>
        <h4 className=" text-md tracking-wider uppercase text-blue-200">
          {title}
        </h4>
        <p className="mt-3 text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default WhatIsInside;
