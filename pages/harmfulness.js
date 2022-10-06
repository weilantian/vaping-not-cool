import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const Lung = () => {
  const [currentStep, setCurrentStep] = useState({
    section: "healthy",
    step: 0,
  });
  return (
    <section className=" overflow-hidden">
      <div className="relative h-screen w-screen">
        <HealthyCards
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />

        {currentStep.section === "smoker" && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            src="/images/lung-warn.png"
            className=" w-full absolute object-contain h-full"
          />
        )}

        <motion.img
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
          src="/images/lung.png"
          className=" w-full object-contain h-full"
        />
      </div>
      <div className="relative h-screen w-screen"></div>
    </section>
  );
};

const HealthyCards = ({ currentStep, setCurrentStep }) => {
  const data = [
    {
      title: "trachea",
      description: "Trachea is where air enters",
      left: "50%",
      top: "30%",
    },
    {
      title: "cilia",
      description:
        "The cilia are tiny hairs inside your trachea which filter the air you breathe in and remove particles of dust and pollution, catching it in mucous to be ejected from the body.",
      left: "50%",
      top: "40%",
    },
    {
      title: "bronchi",
      left: "38%",
      top: "44%",
      description:
        "The bronchi are passageways which branch into smaller tubes to ensure air is evenly distributed across the lungs.",
    },
    {
      title: "alveoli",
      left: "60%",
      top: "60%",
      description:
        "The alveoli are stretchy air sacs where the gas exchange takes place in the lungs, absorbing inhaled oxygen into the blood and taking carbon dioxide out to be exhaled.",
    },
    {
      left: "50%",
      top: "40%",
      title: "",
      description:
        "Damaged and paralysed cilia cause the trachea to become blocked with mucous and dust, making air movement harder.",
    },
    {
      left: "38%",
      top: "44%",
      title: "Cause of Chronic bronchitis",
      description:
        "Chronic bronchitis IS the most common effect of smoking to affect the bronchi, as smoke and inhaled chemicals act as an irritant which inflames the membranes of the air passages. This causes an increase in mucous production and obstruction of the airways as the bronchi attempt to heal.",
    },
    {
      left: "60%",
      top: "50%",
      title: "development of emphysema",
      description:
        "Chemicals in cigarette smoke break down the thin walls of the stretchy alveoli, making it less elastic and resulting in less efficient air sacs. This means less oxygen is absorbed, making breathing more difficult and starting the development of emphysema.",
    },
  ];

  const router = useRouter();
  return (
    <InfoCard
      isDanger={currentStep.step > 3}
      onClick={() => {
        //如果大，则换Section

        if (currentStep.step === data.length - 1) {
          router.push("/quit-now");
          return;
        }

        setCurrentStep({
          ...currentStep,
          step: currentStep.step + 1,
          section: currentStep.step > 2 ? "smoker" : "healthy",
        });
      }}
      {...data[currentStep.step]}
    />
  );
};

const InfoCard = ({
  left = 0,
  top = 0,
  title,
  description,
  onClick,
  isDanger,
  isEnd,
}) => {
  return (
    <motion.div
      layout
      key="infoCard"
      style={{ left, top }}
      className="absolute z-30"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="animate-ping -top-[10px] -left-[20px] absolute flex items-center justify-center w-10 h-10 rounded-full bg-opacity-25 bg-blue-200 ">
          <div
            className={`relative w-6 h-6 rounded-full ${
              isDanger ? "bg-red-100" : "bg-blue-100"
            } `}
          ></div>
        </div>
        <div
          className={` bg-black bg-opacity-80 ${
            isDanger ? "border-red-300" : "border-blue-300"
          }  border-2 max-w-[400px] rounded-md px-4 py-3`}
        >
          <h3
            className={` uppercase ${
              isDanger ? "text-red-300" : "text-blue-300"
            }  text-xl`}
          >
            {title}
          </h3>
          <p>{description}</p>
          <div className="flex mt-2 flex justify-end  items-center">
            <button
              onClick={onClick}
              className=" hover:bg-opacity-25 bg-white bg-opacity-30 px-4 py-1"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lung;
