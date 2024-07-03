import React, { useRef, useEffect } from "react";
import ReuseableButton from "../../../Buttons/ReuseableButton";
import HeroImage from "../../../../assets/media/images/hero-images/pexels-elevate.jpg";
import { useAnimate, stagger, motion } from 'framer-motion';






const HeroBanner = () => {
  
  return (
    <>
      <motion.main className={`grid  py-3 md:grid-cols-12`}>
        <div
          className={`py-5 flex flex-col justify-center gap-3 md:gap-2 mx-3 md:col-span-7 md:p-16 lg:p-32`}
        >
          <h1
            className={`font-CirkaBold text-4xl lg:text-6xl md:leading-[3.5rem]`}
          >
            {`Every Bite Feels`}
            <br />
            {`Like A `}{" "}
            <span className={`rounded text-brandBrown px-2`}>
              Celebration
            </span>
          </h1>
          <p className={` font-InterRegular text-base text-gray-500 font-medium md:text-base lg:text-lg`}>
            {`Welcome to Heat & Grill Kitchen, where every bite feels like a celebration.`}
          
            {`Enjoy our exquisite dishes and warm ambiance, making each visit unforgettable.`}
          </p>
          <ReuseableButton btnContent={`Get in Touch`} />
        </div>
        <div
          className={`bg-brandBrown md:relative  md:col-span-5 flex items-center`}
        >
          <img
            src={HeroImage}
            alt=""
            className={`md:absolute md:w-4/5 rounded md:left-[-4rem] lg:left-[-8rem] shadow-xl`}
          />
        </div>
      </motion.main>
    </>
  );
};

export default HeroBanner;
