import React from "react";
import Button from "../Components/Button";

import { delay, motion } from "framer-motion";

const ContactUs = () => {
  const conatctVariants = {
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
      className="bg-primary padding"
      variants={conatctVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        id="join"
        className="flex flex-col items-center justify-center sm:w-[60%] w-full rounded-3xl px-2 py-4 overflow-hidden m-auto  bg-primary padding"
      >
        <motion.div className="w-full">
          <motion.h2
            className=" text-white font-semibold font-palanquin  sm:text-6xl text-3xl px-2 py-4
          text-center leading-normal"
          >
            JOIN Game Central
          </motion.h2>

          <motion.p className="text-secondary tracking-wider text-center font-montserrat  sm:text-3xl text-2xl px-2">
            Let’s Build Your Gaming World
          </motion.p>
        </motion.div>

        <motion.div className=" mt-8 w-full px-4 py-2">
          <motion.form action="">
            <motion.div className="flex gap-4 sm:flex-row flex-col px-2 py-2">
              <motion.div className=" w-full rounded-full border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
              <motion.div className=" w-full rounded-full border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
            </motion.div>
            <motion.div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
              <motion.div className=" w-full rounded-full border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.input
                  type="email"
                  placeholder="Email"
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
              <motion.div className=" w-full rounded-full border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.input
                  type="text"
                  placeholder="Phone Number"
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
            </motion.div>
            <motion.div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
              <motion.div className=" w-full rounded-full border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.input
                  type="text"
                  placeholder="Subject"
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
            </motion.div>
            <motion.div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
              <motion.div className="w-full rounded-3xl border border-white focus-within:border-secondary overflow-hidden bg-transparent">
                <motion.textarea
                  rows={10}
                  cols={50}
                  placeholder="Tell Us Something...."
                  className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
                />
              </motion.div>
            </motion.div>
            <motion.div className=" flex items-center justify-center px-2 py-4">
              <Button label={"Get in Touch"} />
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
