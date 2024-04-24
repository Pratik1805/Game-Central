import React from "react";
import { motion } from "framer-motion";
const GameDescription = ({ title, description, src, href, link, read }) => {
  const descriptionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className=" flex flex-col items-center justify-center gap-2 px-2 py-4 w-full bg-black"
      variants={descriptionVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className=" overflow-hidden bg-center bg-cover rounded-md bg-no-repeat bg-white px-2 py-4 hover:border-secondary border-4">
        <motion.a href={href} target="_blank">
          <motion.img
            src={src}
            alt="game icon"
            className=" w-[280px] h-[180px]"
          />
        </motion.a>
      </motion.div>

      <motion.h1 className=" text-white text-4xl font-montserrat font-semibold text-center ">
        {title}
      </motion.h1>

      <motion.p className=" text-white text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify">
        {description}
      </motion.p>

      <motion.div className=" flex items-center justify-center gap-4 px-2 py-4">
        <motion.a
          href={read}
          className="  text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify text-secondary hover:text-white"
        >
          Read More
        </motion.a>
        <motion.a
          href={link}
          className="  text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify text-secondary hover:text-white"
        >
          Watch Trailer
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default GameDescription;
