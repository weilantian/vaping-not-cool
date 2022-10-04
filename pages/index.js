import Image from "next/image";

import background from "/public/images/background.png";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col  items-center justify-center w-screen">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className=" uppercase text-blue-200 font-light text-center tracking-widest w-[460px] text-7xl"
        >
          vaping is not cool.
        </motion.h1>
      </div>

      <div className=" flex mt-8 items-center">
        <Link href="/inside">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className=" uppercase hover:bg-opacity-10  px-8 py-4 bg-opacity-20 bg-white tracking-wider"
          >
            discover
          </motion.a>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0.4, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2 }}
        style={{ zIndex: -1 }}
        className="fixed h-screen w-screen"
      >
        <Image objectFit="cover" alt="" src={background} layout="fill" />
      </motion.div>
    </div>
  );
}
