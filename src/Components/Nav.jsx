import React from "react";
import { gaming, hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import Button from "./Button";
import { motion } from "framer-motion";
const Nav = () => {
  const variants = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggeredchildren: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      className=" bg-primary py-8 flex justify-evenly items-center"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className=" flex justify-center items-center">
        <motion.div className=" flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]  px-2 mx-4 py-4">
          <motion.img src={gaming} alt="icon" width={76} height={46} />
        </motion.div>
        <motion.h1 className=" text-white text-4xl font-palanquin font-semibold ">
          Game Central
        </motion.h1>
      </motion.div>
      <motion.div
        className="sm:block hidden px-8"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.ul className=" flex flex-1 justify-center gap-16">
          {navLinks.map((item) => (
            <motion.li>
              <motion.a
                href={item.href}
                key={item.label}
                className=" text-white font-palanquin text-2xl leading-normal hover:text-secondary"
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div className="sm:hidden block px-6">
        <img src={hamburger} alt="Hamburger" width={56} height={46} />
      </motion.div>

      <motion.div
        className="sm:block hidden"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Button label="Contact Us" />
      </motion.div>
    </motion.div>
  );
};

export default Nav;
