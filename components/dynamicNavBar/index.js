import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "/public/images/logo.png";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

import { IoHome, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRouter } from "next/router";
import routes, { routeLookUp } from "../../routes";

const DynamicNavBar = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <div className="px-8 mb-4 justify-between flex items-center">
      <Image width={48} height={48} objectFit="contain" alt="Logo" src={logo} />
      <div className="">
        <motion.div
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          initial={{ height: 20 }}
          animate={{ height: hovered ? 70 : 20 }}
          className="flex overflow-hidden mt-8 justify-between  space-x-12"
        >
          <Item
            hovered={hovered}
            description="how is vaping a bad thing"
            title="Chemicals"
            href="/inside"
          />
          <Item
            hovered={hovered}
            description="how vaping impact your health"
            title="Lung"
            href="/harmfulness"
          />
          <Item
            hovered={hovered}
            description="quit vaping today, help with you and others."
            title="quit"
            href="/quit-now"
          />
        </motion.div>
        <ProgressBar />
        <div className=" mt-4 justify-between flex space-x-2">
          <div className="flex space-x-2">
            <Link href="/">
              <button className=" hover:opacity-75 flex justify-center items-center rounded-full w-8 h-8 bg-white bg-opacity-20">
                <IoHome />
              </button>
            </Link>

            <button
              onClick={() => {
                router.push(routeLookUp(router.pathname, -1));
              }}
              className=" hover:opacity-75 flex justify-center items-center rounded-full w-8 h-8 bg-white bg-opacity-20"
            >
              <IoChevronBack />
            </button>
          </div>

          <button
            onClick={() => {
              router.push(routeLookUp(router.pathname, 1));
            }}
            className={` ${
              router.pathname === "/quit-now" ? "" : " animate-pulse"
            } flex hover:opacity-75 justify-center items-center rounded-full w-8 h-8 bg-white bg-opacity-20`}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const router = useRouter();

  const styles = useSpring({
    width: `${(routes.indexOf(router.pathname) / (routes.length - 1)) * 100}%`,
  });

  return (
    <div className="w-full mt-4 h-[2px] bg-white bg-opacity-30 relative">
      <animated.div
        style={styles}
        className="bg-white relative h-full w-8"
      ></animated.div>
    </div>
  );
};

const Item = ({ selected, hovered, title, description, href }) => {
  const router = useRouter();
  return (
    <a
      onClick={() => {
        if (router.pathname === href) return;
        router.push(href);
      }}
      href="#"
    >
      <motion.h3
        initial={{ fontSize: "1rem" }}
        animate={{
          fontSize: hovered ? "1.2rem" : "1rem",
        }}
        className={`tracking-widest w-[200ox] ${
          router.pathname === href ? "opacity-100 text-blue-200" : "opacity-75"
        }  uppercase`}
      >
        {title}
      </motion.h3>
      <p
        className={`uppercase text-sm w-[180px] ${
          router.pathname === href ? "opacity-100" : "opacity-70"
        }  `}
      >
        {description}
      </p>
    </a>
  );
};

export default DynamicNavBar;
