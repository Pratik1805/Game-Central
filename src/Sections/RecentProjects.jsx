import React from "react";
import { recentProjects } from "../Constants";
import { motion } from "framer-motion";
import Button from "../Components/Button";

const RecentProjects = () => {
  const projectVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section
      className=" flex items-center justify-center flex-col max-container px-2 py-4 bg-center bg-no-repeat bg-cover "
      variants={projectVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className=" flex items-center justify-center w-full px-2 py-4">
        <motion.h1 className=" text-white sm:text-6xl text-4xl font-montserrat font-semibold text-center">
          Our Recent Projects
        </motion.h1>
      </motion.div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {recentProjects.map((items) => (
          <motion.div key={items.id} className=" flex flex-col items-center justify-center rounded-md overflow-hidden px-2 py-4">
            <motion.img
              src={items.src}
              alt="project img"
              className="w-full h-[80%] object-cover hover:border-secondary hover:border-2 rounded-md"
            />
            <motion.h3 className=" text-white mt-4 text-3xl hover:text-secondary hover:cursor-pointer">{items.title}</motion.h3>
          </motion.div>
        ))}
      </motion.div>
      <Button label="See All"/>
    </motion.section>
  );
};

export default RecentProjects;
