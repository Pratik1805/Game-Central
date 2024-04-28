import React, { useState } from "react";
import { gaming, hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import Button from "./Button";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        delay: 0.5,
        staggeredchildren: 0.5,
      },
    },
  };

  let [open, setOpen] = useState(false);
  return (
    <motion.div
      className=" w-full  top-0 left-0 bg-primary relative"
      variants={variants}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      <motion.div className="md:flex items-center justify-evenly py-4 md:px-10 px-7 w-full gap-4">
        <Link to="/">
          <motion.div className=" flex justify-start items-center sm:w-full w-[80%]">
            <motion.div className=" flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]  px-2 mx-4 py-4">
              <motion.img src={gaming} alt="icon" width={76} height={46} />
            </motion.div>
            <motion.h1 className=" text-white text-4xl font-palanquin font-semibold ">
              Game Central
            </motion.h1>
          </motion.div>
        </Link>

        <motion.div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img src={hamburger} alt="Hamburger" width={36} height={36} />
        </motion.div>
        <motion.ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static gap-8 sm:bg-primary bg-white max-sm:rounded-md md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <a
                href={item.href} // Assuming item.path is the path you want to navigate to
                className="sm:text-white font-palanquin text-2xl leading-normal hover:text-secondary"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
          <div className=" flex items-start justify-center gap-4 flex-col sm:flex-row">
          <motion.div>
            <Link to="/about">
              <Button label="About Us" />
            </Link>
          </motion.div>
          <motion.div>
            <Link to="/contact">
              <Button label="Contact Us" />
            </Link>
          </motion.div>
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
