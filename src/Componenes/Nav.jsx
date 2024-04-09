import React from "react";
import { gaming, hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import Button from "./Button";
const Nav = () => {
  return (
    <div className=" bg-primary py-8 flex justify-evenly items-center">
      <div className=" flex justify-center items-center">
        <div className=" flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]  px-2 mx-4 py-4">
          <img src={gaming} alt="icon" width={76} height={46} />
        </div>
        <h1 className=" text-white text-4xl font-palanquin font-semibold ">
          Game Central
        </h1>
      </div>
      <div className="sm:block hidden px-8">
        <ul className=" flex flex-1 justify-center gap-16">
          {navLinks.map((item) => (
            <li>
              <a
                href={item.href}
                key={item.label}
                className=" text-white font-palanquin text-2xl leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden block px-6">
        <img src={hamburger} alt="Hamburger"  width={56} height={46}/>
      </div>

      <div className="sm:block hidden">
        <Button label="Contact Us"/>
      </div>
    </div>
  );
};

export default Nav;
