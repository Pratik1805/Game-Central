import React from "react";
import { team } from "../Constants";
import TeamCard from "../Components/TeamCard";
import {motion} from "framer-motion"

const aboutVariants={
  initial:{
    opacity:0,
    x:-100
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
}

const About = () => {
  return (
    <motion.section className=" bg-primary padding" variants={aboutVariants} initial="initial" animate="animate">
      <motion.div className=" w-full flex flex-col items-center justify-center gap-4 px-2 py-4">
        <motion.div className=" flex flex-col justify-center items-start gap-2 px-2 py-4">
          <motion.h1 className=" text-secondary font-palanquin  font-bold text-6xl leading-normal">
            Welcome to Game Central
          </motion.h1>

          <motion.p className=" text-white font-montserrat text-lg font-semibold leading-normal mt-2 text-justify">
            At Game Central, we are passionate creators, storytellers, and
            innovators in the world of gaming. Founded in 2020 by a team of
            dedicated gamers and developers, our mission is to craft
            unforgettable gaming experiences that captivate players around the
            globe.
          </motion.p>
        </motion.div>

        <motion.div className=" flex items-center justify-between px-2 py-4 gap-8 mt-4 sm:flex-row flex-col">
          <motion.div className=" flex flex-col justify-center items-center px-4 py-4 border-2 border-white rounded-md w-[80%] hover:border-secondary">
            <motion.h1 className=" text-secondary font-palanquin  font-bold text-4xl leading-normal">
              Our Story
            </motion.h1>

            <motion.p className=" text-white font-montserrat text-lg font-semibold leading-normal mt-2 text-start px-4">
              Our journey began with a shared love for gaming and a dream to
              bring our unique visions to life. Over the years, we've evolved
              into a tight-knit team of talented individuals, united by our
              commitment to pushing the boundaries of creativity and technology.
            </motion.p>
          </motion.div>
          <motion.div className=" flex flex-col justify-center items-center gap-2 px-4 py-4 border-2 border-white hover:border-secondary rounded-md w-[80%]">
            <motion.h1 className=" text-secondary font-palanquin  font-bold text-4xl leading-normal">
              What We Do
            </motion.h1>

            <motion.p className=" text-white font-montserrat text-lg font-semibold leading-normal mt-2 text-start px-4">
              From concept to completion, we specialize in every aspect of game
              development. Whether it's designing immersive worlds, developing
              cutting-edge gameplay mechanics, or creating stunning visuals and
              soundscapes, we pour our hearts and souls into every project we
              undertake.
            </motion.p>
          </motion.div>
          <motion.div className=" flex flex-col justify-center items-center gap-2 px-4 py-4 border-2 border-white hover:border-secondary rounded-md w-[80%]">
            <motion.h1 className=" text-secondary font-palanquin  font-bold text-4xl leading-normal">
              Our Values
            </motion.h1>

            <motion.p className=" text-white font-montserrat text-lg font-semibold leading-normal mt-2 text-start px-4">
              At the core of everything we do are our values: <span className=" text-secondary">creativity,
              innovation, and excellence.</span> We believe in pushing the limits of
              what's possible, constantly striving to raise the bar and deliver
              experiences that exceed expectations.
            </motion.p>
          </motion.div>

        </motion.div>

        <motion.div className=" flex flex-col justify-center items-center gap-2 px-4 py-4  rounded-md w-full">
          <motion.h1 className=" text-secondary font-palanquin  font-bold text-6xl leading-normal">
            Our Team
          </motion.h1>

          <motion.div className=" flex sm:flex-row flex-col flex-1 items-center justify-center gap-8 w-full mt-2">
            {team.map((item) => (
              <TeamCard  name={item.name} position={item.position} src={item.src} key={item.id}/>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
