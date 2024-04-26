import React from "react";
import { trendingGames } from "../Constants";
import TrendingGameCard from "../Components/TrendingGameCard";
import { motion } from "framer-motion";

const Trending = () => {
  const trendVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay:0.5,
        staggerChildren: 0.1,
        
      },
    },
  };
  return (
    <motion.section
      className=" bg-primary padding"
      id="trending"
      variants={trendVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="flex flex-col items-center justify-center max-container mt-2 ">
        <motion.h1 className=" text-white text-4xl font-montserrat font-semibold text-center ">
          Currently Trending Games
        </motion.h1>

        <motion.div className=" mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-4">
          {trendingGames.map((items) => (
            <TrendingGameCard key={items.id} {...items} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Trending;
