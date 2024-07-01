import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationData } from "../Data/NavigationData";
import { IoReorderTwoOutline, IoCloseOutline } from "react-icons/io5";

const WebNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`bg-white shadow-md flex flex-row justify-between items-center py-5 px-7 z-40 sticky top-0`}
    >
      <h1 className={`text-sm md:text-lg`}>Heat & Grill Kitchen</h1>
      <nav className={`flex flex-row items-center gap-16 lg:gap-64 text-xl md:text-base`}>
        <ul className={`z-40  ${isOpen ? `block w-full h-dvh backdrop-blur-xl bg-brandLightBrown flex-col items-start justify-start absolute right-0 p-10 top-[4.7rem] z-50` : 'hidden md:flex md:flex-row md:gap-5 gap-8'}`}>
          {NavigationData.map((data, idx) => {
            return (
              <li className={`py-5 border-1 md:py-0 `} key={idx}>
                <NavLink end={data.end} to={data.link} className={``}>
                  {data.pageName}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <aside className={`flex gap-5 items-center justify-center`}>
          <NavLink
            to="/get-in-touch"
            className={` bg-brandBrown text-xs py-3 px-5 md:py-3 md:px-10  rounded-full text-white shadow-sm hover:bg-brandLightBrown  hover:text-brandBlack hover:ring-2 hover:ring-brandBrown hover:ring-inset`}
          >
            Get in Touch
          </NavLink>
          <button className={`hover:bg-brandBrown/60 rounded-s-full md:hidden`} type="button" onClick={handleClick}>{isOpen?<IoCloseOutline className={`text-4xl`}/>:<IoReorderTwoOutline className={`text-4xl`}/>}</button>
        </aside>
      </nav>
    </header>
  );
};

export default WebNavigation;
