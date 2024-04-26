import React, { useState } from "react";
import { fire } from "../assets/icons";
import Button from "./Button";
import GameDescription from "./GameDescription";
import { Link } from "react-router-dom";

const TrendingGameCrad = ({ id, href, src, Title, link, Description, read }) => {
  // const [showDescription, setShowDescription] = useState(false);
  
  // const toggleDescription = () => {
  //   setShowDescription(!showDescription);
  // }


 return (
    <div
      className="flex justify-center items-center flex-col rounded-md mt-2"
      key={id}
    >
      <div className="overflow-hidden bg-center bg-cover rounded-md bg-no-repeat bg-white px-2 py-4 hover:border-secondary border-4">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={src} alt="game icon" className="w-[280px] h-[180px]" />
        </a>
      </div>
      <div className="flex items-start mt-4 px-4 py-4">
        <img src={fire} alt="fire" width={24} height={24} />
        <p className="text-xl text-white font-palanquin font-semibold px-2">
          40 Followers
        </p>
      </div>

      <Link to='/description'
            state={{ title: Title, Link:link, description:Description,Read:read, Href:href, SRC:src }}>
        <Button label={"Read More"} />
      </Link>
      {/* {showDescription && <GameDescription title={Title} description={Description} src={src} href={href} link={link} read={read} />} */}
    </div>
 );
};

export default TrendingGameCrad;