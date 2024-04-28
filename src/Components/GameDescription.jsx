import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation

const GameDescription = () => {

 const location = useLocation(); // Use useLocation to access the location object

const title = location.state?.title ?? "Default title";
const description = location.state?.description ?? "Default description";
const href = location.state?.Href;
const src = location.state?.SRC;
const read = location.state?.Read;
const link = location.state?.Link;

// Framer Motion Variants

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
  <section className=" bg-primary padding">

    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-2 py-4 w-full bg-black"
      variants={descriptionVariants}
      initial="initial"
      animate="animate"
      >
      <motion.div className="overflow-hidden bg-center bg-cover rounded-md bg-no-repeat bg-white px-2 py-4 hover:border-secondary border-4">
        <motion.a href={href} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={src}
            alt="game icon"
            className="w-[280px] h-[180px]"
            />
        </motion.a>
      </motion.div>

      <motion.h1 className="text-white text-4xl font-montserrat font-semibold text-center mt-4">
        {title}
      </motion.h1>

      <motion.p className="text-white text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify">
        {description}
      </motion.p>

      <motion.div className="flex items-center justify-center gap-4 px-2 py-4">
        <motion.a
          href={read}
          className="text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify text-secondary hover:text-white"
          >
          Read More
        </motion.a>
        <motion.a
          href={link}
          className="text-xl font-semibold font-palanquin leading-normal py-4 mt-4 text-justify text-secondary hover:text-white"
          >
          Watch Trailer
        </motion.a>
      </motion.div>
    </motion.div>
          </section>
 );
};

export default GameDescription;