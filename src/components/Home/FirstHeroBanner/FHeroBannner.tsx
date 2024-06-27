import React from "react";
import Resturant from "../../../assets/media/images/hero-images/table.jpg";
import LocationIcon from "../../../assets/media/icons/icons8-location-30 (2).png";
import ClockIcon from "../../../assets/media/icons/icons8-clock-30.png";

const ContentData = [
  {
    id: 1,
    title: "120 Fulham Road London, United Kingdom",
    image: LocationIcon,
  },

  {
    id: 2,
    title: "Everyday 7:00am - 11:00pm",
    image: ClockIcon,
  },
];

const FHeroBannner = () => {
  return (
    <>
      <section
        className={`bg-brandLightBrown grid grid-cols-2 py-20 px-40 gap-10 relative`}
      >
        <div className={``}>
          <img src={Resturant} alt="" className={`rounded-xl shadow`} />
          <div className={` absolute right-[48%] bottom-14 bg-brandLightBrown p-4 w-[18%] rounded-xl shadow-2xl`}>
            <h3 className={`font-playFairBlack p-1 text-sm`}>Visit us for the ultimate culinary adventure</h3>

            {ContentData.map((data) => (
              <ul key={data.id} className={`flex flex-row gap-3 text-xs p-1`}>
                <li>
                  <img src={data.image} alt="" className={`w-5`} />
                </li>
                <li>{data.title}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className={``}>
          <h2 className="">
            {`Every Bite Feels`}
            <br />
            {`Like A `}{" "}
          </h2>
        </div>
      </section>
    </>
  );
};

export default FHeroBannner;
