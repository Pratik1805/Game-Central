import React from "react";
import { fire } from "../assets/icons";
import Button from "./Button";

const TrendingGameCrad = ({ id, href, src }) => {
  return (
    <div
      className=" flex justify-center items-center flex-col rounded-md mt-2"
      key={id}
    >
      <div className=" overflow-hidden bg-center bg-cover rounded-md bg-no-repeat bg-white px-2 py-4 hover:border-secondary hover:border-2">
        <a href={href} target="_blank">
          <img src={src} alt="game icon" className=" w-[280px] h-[180px]" />
        </a>
      </div>
      <div className=" flex items-start mt-4 px-4 py-4">
        <img src={fire} alt="fire" width={24} height={24} />
        <p className=" text-xl text-white font-palanquin font-semibold px-2">
          40 Followers
        </p>
      </div>
        //TODO:ADD Routing here
        <Button label={"Read More"} />
      
    </div>
  );
};

export default TrendingGameCrad;
