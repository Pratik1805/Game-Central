import React from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";

const Subscribe = () => {
  const subscribeVariants ={
    initial:{
      opacity:0,
   
    },
    animate:{
   
      opacity:1,
      transition: {
        duration: 1,
        delay:0.5,
        staggerChildren: 0.1,
      },
    }
  };
  return (
    <motion.section
      className=" flex max-container items-center justify-between max-lg:flex-col gap-10 "
      id="contact-us"
      variants={subscribeVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className=" flex flex-col items-start justify-center">
        <motion.h3 className=" text-4xl leading-[68px] lg:max-w-md font-montserrat font-semibold text-white">
          Stay in the loop for{" "}
          <motion.span className=" text-secondary"> Updates </motion.span>& Newsletter
        </motion.h3>
        <motion.p className=" text-white ">
          Subscribe to receive the latest news and updates about TDA.
          <br />
          We promise not to spam you!{" "}
        </motion.p>
      </motion.div>

      <motion.div className="lg:max-w-[40%] w-full flex items-center justify-center max-sm:flex-col gap-5 p-2.5">
        <motion.input
          type="text"
          placeholder="Subscribe@GameCentral.com"
          className="input"
        />
        <Button label="Sign Up" />
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
