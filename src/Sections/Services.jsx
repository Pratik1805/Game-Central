import React from "react";
import { services } from "../Constants";
import { motion } from "framer-motion";
const Services = () => {
  const serviceVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className=" flex items-center justify-center flex-col max-container px-2 py-4 service-background bg-center bg-no-repeat bg-cover "
      variants={serviceVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className=" flex items-center justify-center w-full px-2 py-4">
        <motion.h1 className=" text-white sm:text-6xl text-4xl font-montserrat font-semibold text-center">
          We Offer Expertise in
        </motion.h1>
      </motion.div>
      <motion.div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-4 mt-8">
        {services.map((item) => (
          <motion.div
            className=" flx flex-col items-center justify-center gap-4 mt-8 m-auto"
            key={item.id}
          >
            <motion.div className=" flex justify-center items-center">
              <motion.img src={item.src} alt="icon" width={72} height={72} />
            </motion.div>
            <motion.h3 className=" text-white mt-2 px-2 text-2xl text-center font-palanquin font-semibold">
              {item.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
