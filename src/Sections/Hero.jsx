import React from "react";
import { joyStick } from "../assets/images";

const Hero = () => {
  return (
    <div className="w-full flex  max-container gap-4 justify-center max-sm:flex-col-reverse padding-y">
      <div className=" w-full px-2 py-4 max-sm:text-center ">
        <h2 className=" mt-2">
          <span className=" text-textColor font-montserrat  text-4xl font-semibold">
            3D Game Dev
          </span>
        </h2>
        <h1 className=" text-white sm:text-8xl text-6xl font-semibold font-palanquin leading-normal mt-2">
          Work that we <br />
          produce for our <br /> clients
        </h1>
        <p className=" text-white text-xl font-semibold font-palanquin leading-normal py-4 mt-2 ">
          Gaming is a dynamic form of entertainment, <br />
          offering immersive experiences and fostering vibrant communities
          worldwide.
        </p>
      </div>

      <div className="sm:block hidden m-auto px-2 mt-4 max-sm:mt-8 w-2/3">
        <img
          src={joyStick}
          alt="joyStick"
          width={420}
          height={420}
          className="object-contain relative z-10 "
        />
      </div>
    </div>
  );
};

export default Hero;
