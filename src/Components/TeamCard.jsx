import React from "react";

const TeamCard = ({ name, position, src }) => {
  return (
    <div className=" flex flex-col item-center justify-center rounded-md mt-2 px-2 py-4 bg-[#1C140F] hover:bg-secondary cursor-pointer w-[80%]">
      <a
        href="
        https://www.linkedin.com/in/pratik-pandey-527994220/"
        target="_blank"
      >
        <img src={src} alt="icon" className=" m-auto" />
      </a>
      <h2 className=" text-white text-xl text-center">{name}</h2>
      <h3 className=" text-white text-lg text-center">{position}</h3>
    </div>
  );
};

export default TeamCard;
