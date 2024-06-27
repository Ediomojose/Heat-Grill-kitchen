import React from "react";
import ReuseableButton from "../../../Buttons/ReuseableButton";
import HeroImage from "../../../../assets/media/images/hero-images/pexels-elevate.jpg"

const HeroBanner = () => {
  return (
    <>
      <main className={`grid  py-3 md:grid-cols-12`}>
        <div className={`py-5 flex flex-col justify-center gap-3 md:gap-2 mx-3 md:col-span-7 md:p-16 lg:p-32`}>
          <h1 className={`font-playFairBlack text-4xl md:text-3xl lg:text-5xl md:leading-[3.5rem]`}>
            {`Every Bite Feels`}
            <br />
            {`Like A `}{" "}
            <mark
              className={`rounded bg-brandBrown text-brandLightBrown px-2`}
            >
              Celebration
            </mark>
          </h1>
          <p className={`font-filmNoirRegular text-xxs md:text-xxs lg:text-sm`}>
            {`Welcome to Heat & Grill Kitchen, where every bite feels like a celebration.`}
            <br />
            {`Enjoy our exquisite dishes and warm ambiance, making each visit unforgettable.`}
          </p>
          <ReuseableButton btnContent={`Get in Touch`}/>
        </div>
        <div className={`bg-brandBrown md:relative  md:col-span-5 flex items-center`}>
            <img src={HeroImage} alt="" className={`md:absolute md:w-4/5 rounded md:left-[-4rem] lg:left-[-8rem] shadow-xl`}/>
        </div>
      </main>
    </>
  );
};

export default HeroBanner;
