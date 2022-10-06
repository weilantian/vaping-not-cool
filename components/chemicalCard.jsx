import { motion } from "framer-motion";

const ChemicalCard = ({ name, selected, imageSrc, type, onClick, delay }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.2 : 1, y: selected ? -100 : 0 }}
    >
      <motion.div
        onClick={onClick}
        transition={{ delay }}
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border  cursor-pointer transition-all duration-75 group w-[400px] select-none  ${
          selected ? "border-blue-500" : "border-gray-300 hover:border-blue-300"
        } `}
      >
        <div
          className={`uppercase transition-all duration-75 tracking-widest border ${
            selected
              ? "border-blue-200"
              : "border-gray-300  group-hover:border-blue-300"
          }  py-2 px-4 text-blue-200`}
        >
          {type}
        </div>
        <div className="px-4 py-6 tracking-wide">
          <img
            className=" select-none h-48 w-full object-cover"
            src={imageSrc}
            alt=""
          />
          <h1 className="text-4xl mt-4 text-blue-200">{name}</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChemicalCard;
