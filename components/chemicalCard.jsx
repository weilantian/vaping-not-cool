import { motion } from "framer-motion";

const ChemicalCard = ({
  color,
  name,
  description,
  imageSrc,
  type,
  causing,
  delay,
}) => {
  return (
    <motion.div
      transition={{ delay }}
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      className="border w-[400px]  border-blue-200"
    >
      <div className=" uppercase tracking-widest border border-blue-200 py-2 px-4 text-blue-200">
        {type}
      </div>
      <div className="px-4 py-6 tracking-wide">
        <img className=" h-48 w-full object-cover" src={imageSrc} alt="" />
        <h1 className="text-4xl mt-4 text-blue-200">{name}</h1>
        <p className="text-white  mt-2 text-md">{description}</p>
        {causing && (
          <>
            <h3 className=" mt-2 text-blue-200  tracking-widest uppercase">
              Causing
            </h3>
            <p className="text-white">{causing}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ChemicalCard;
