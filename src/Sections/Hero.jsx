import React from "react";
import { joyStick } from "../assets/images";
import { motion } from "framer-motion";
import { cry1, unity, unreal } from "../assets/icons";
import Button from "../Components/Button";
const Hero = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
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
  const imgvariants = {
    initial: {
      x: 500,
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
    <motion.section className="bg-primary padding"
    id="home"
    variants={variants}
          initial="initial"
          animate="animate">
      <motion.div className=" flex  max-container gap-4 justify-center  max-sm:flex-col padding-y ">
        <motion.div
          className=" w-full px-2 py-4 max-sm:text-center "
          
        >
          <motion.h2 className=" mt-2">
            <motion.span className=" text-textColor font-montserrat  text-4xl font-semibold">
              3D Game Dev
            </motion.span>
          </motion.h2>
          <motion.h1 className=" text-white sm:text-8xl text-6xl font-semibold font-montserrat leading-normal mt-4">
            Work that we <br />
            produce for our <br /> clients
          </motion.h1>
          <motion.p className=" text-white text-xl font-semibold font-palanquin leading-normal py-4 mt-4 ">
            Gaming is a dynamic form of entertainment, <br />
            offering immersive experiences and fostering vibrant communities
            worldwide.
          </motion.p>

          <motion.div className=" mt-4">
            <Button label="Get More Details" />
          </motion.div>
        </motion.div>

        <motion.div
          className=" relative sm:block hidden px-2 mt-2 w-2/3"
          variants={imgvariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className=" z-20 w-full">
            <motion.img
              src={joyStick}
              alt="joyStick"
              width={420}
              height={320}
              className="object-contain absolute z-10 top-0 mx-20"
            />
          </motion.div>
          <motion.div className=" z-10 absolute top-0 mt-20 right-28 ">
            <motion.img
              src={unreal}
              alt=" unreal engine"
              width={108}
              height={72}
            />
          </motion.div>
          <motion.div className=" z-10 absolute top-0 mt-20 left-14 ">
            <motion.img src={cry1} alt="cryengine" width={108} height={72} />
          </motion.div>
          <motion.div className=" z-10 absolute top-48 -left-6 mt-20">
            <motion.img src={unity} alt="unity" width={108} height={72} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
