import { motion } from "framer-motion";

const ChemicalInfoBlock = ({ imgSrc, name, pronunciation, intro }) => {
  return (
    <motion.div
      transition={{ type: "spring" }}
      key={name}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <div className="flex items-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="  w-14 h-14 object-cover rounded-full"
          src={imgSrc}
          alt=""
        />
        <div transition={{ staggerChildren: 0.4 }} className=" ml-4">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween", duration: 1.2 }}
              className=" text-blue-300 uppercase tracking-widest text-3xl"
            >
              {name}
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.p
        transition={{ type: "tween", duration: 0.8, delay: 0.8 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="  mt-4 text-gray-300"
      >
        {intro}
      </motion.p>
    </motion.div>
  );
};

export default ChemicalInfoBlock;
