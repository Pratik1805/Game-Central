import React from "react";
import { gaming } from "../assets/icons";
import { animate, delay, motion } from "framer-motion";
import { footerLinks, socialMedia } from "../Constants";
const Footer = () => {
  const footerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
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
      className="bg-primary padding pb-8"
      variants={footerVariants}
      animate="animate"
      initial="initial"
    >
      <motion.footer className=" max-container   ">
        <motion.div className=" flex sm:flex-row flex-col justify-evenly">
          <motion.div className=" flex flex-col items-center mt-8 px-2 gap-4">
            <motion.div className=" flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]  px-2 mx-4 py-4">
              <motion.img src={gaming} alt="icon" width={76} height={46} />
            </motion.div>
            <motion.h3 className=" text-white text-xl  text-center mt-2 leading-normal font-palanquin">
              Come along on a <span className=" text-secondary">journey</span>{" "}
              to discover the world of{" "}
              <span className=" text-secondary">Gaming</span>
            </motion.h3>
          </motion.div>
          <motion.div className="  flex flex-col items-center mt-8 px-2 gap-2">
            <motion.h3 className=" text-secondary text-3xl  font-palanquin">
              About Us
            </motion.h3>

            {footerLinks.map((items) => (
              <motion.a
                href="#"
                className=" text-white py-2 hover:text-secondary text-[20px] font-montserrat"
                key={items.id}
              >
                {items.title}
              </motion.a>
            ))}
          </motion.div>
          <motion.div className="  flex flex-col items-center mt-8 px-2  gap-4">
            <motion.h3 className=" text-secondary text-3xl mb-2 font-palanquin">
              Contact Us
            </motion.h3>
            <motion.p className=" text-white font-montserrat text-justify">
              123 Maple Street <br /> Springfield, INDIA
            </motion.p>
            <motion.p className=" text-white font-montserrat">
              (+91)-1234567891
            </motion.p>
          </motion.div>

          <motion.div className=" flex justify-center mt-8 px-2 ">
            {socialMedia.map((items) => (
              <img src={items.src} alt={items.alt} key={items.alt} />
            ))}
          </motion.div>
        </motion.div>

        <motion.hr className=" mt-4" />

        <motion.div className=" flex items-center justify-center mt-4">
          <motion.h3 className=" text-white font-bold font-palanquin  text-center leading-normal ">
            2024 © Gaming Platform LANDING PAGE - <br /> Developed BY:{" "}
            <span className=" text-secondary">Pratik Pandey</span> and Design
            BY: Sanoj Dilshan - ALL RIGHTS RESERVED{" "}
          </motion.h3>
        </motion.div>
      </motion.footer>
    </motion.section>
  );
};

export default Footer;
