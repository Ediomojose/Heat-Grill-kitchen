import React from "react";
import GiantEagle from "../../../assets/media/logo/id5J6yJOhQ_1720050272204.svg";
import Opay from "../../../assets/media/logo/id6sbCso4N_1720050536120.svg";
import ChikenRepublic from "../../../assets/media/logo/idIQa36aT9_logos.svg";
import Chowdeck from "../../../assets/media/logo/ideKhAS7QO_1720050331242.svg";
import Supermart from "../../../assets/media/logo/idnk2wSe7A_1720050595266.svg";
import UberEats from "../../../assets/media/logo/idtO8zuQN9_1720050164572.svg";

const Marquee = () => {
  return (
    <>
      <section
        className={`relative flex items-center justify-center overflow-x-hidden bg-brandLightBrown `}
      >
        <div
          className={`grid grid-cols-4 items-center justify-center gap-4 md:gap-14   animate-marquee whitespace-nowrap`}
        >
          
          <img
            src={Opay}
            alt="CocaCola Logo"
            className={`mix-blend-color-burn		`}
          />
          <img
            src={ChikenRepublic}
            alt="JPMorgan Logo"
            className={`mix-blend-color-burn		`}
          />
          {/* <img
            src={Chowdeck}
            alt="Microsoft Logo"
            className={`mix-blend-color-burn		`}
          /> */}
          <img
            src={Supermart}
            alt="Nike Logo"
            className={`mix-blend-color-burn		`}
          />
          <img
            src={UberEats}
            alt="Nvidia Logo"
            className={`mix-blend-color-burn		`}
          />
        </div>

        <div
          className={`grid grid-cols-6 items-center justify-center gap-4 pl-4 animate-marqueeSec whitespace-nowrap absolute md:gap-14`}
        >
         
          <img
            src={Opay}
            alt="CocaCola Logo"
            className={`mix-blend-color-burn		`}
          />
          <img
            src={ChikenRepublic}
            alt="JPMorgan Logo"
            className={`mix-blend-color-burn		`}
          />
          {/* <img
            src={Chowdeck}
            alt="Microsoft Logo"
            className={`mix-blend-color-burn		`}
          /> */}
          <img
            src={Supermart}
            alt="Nike Logo"
            className={`mix-blend-color-burn		`}
          />
          <img
            src={UberEats}
            alt="Nvidia Logo"
            className={`mix-blend-color-burn		`}
          />
        </div>
      </section>
    </>
  );
};

export default Marquee;
