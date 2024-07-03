import React from "react";
import Resturant from "../../../assets/media/images/hero-images/table.jpg";
import LocationIcon from "../../../assets/media/icons/icons8-location-30 (2).png";
import ClockIcon from "../../../assets/media/icons/icons8-clock-30.png";
import ReuseableButton from "../../Buttons/ReuseableButton";

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
        className={`bg-brandLightBrown grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 lg:py-20 md:px-10 lg:px-40 gap-14 relative`}
      >
        <div className={``}>
          <img src={Resturant} alt="" className={`md:rounded-xl shadow`} />
          <div
            className={` absolute bottom-[25rem]  md:right-[48%] md:bottom-32 lg:bottom-14 bg-brandLightBrown p-4 md:w-[30%] lg:w-[18%] md:rounded-xl shadow-2xl`}
          >
            <h3 className={`font-InterRegular p-1 text-sm `}>
              Visit us for the ultimate culinary adventure
            </h3>

            {ContentData.map((data) => (
              <ul key={data.id} className={`flex flex-row gap-3 text-xs p-1`}>
                <li className={`font-InterRegular`}>
                  <img src={data.image} alt="" className={`w-5`} />
                </li>
                <li>{data.title}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className={`px-5 md:pl-5`}>
          <h2 className={`font-CirkaBold text-3xl md:text-4xl pb-4`}>
            {`A Sophisticated And`}
            <br />
            {`Traditional Cuisine `}{" "}
          </h2>
          <div className={`pb-3 font-InterRegular`}>
            <p className={`text-justify text-sm lg:text-base pb-5`}>
              {`This is where  culinary elegance meets timeless tradition. Indulge in our meticulously crafted dishes, blending rich, authentic flavors with refined, contemporary touches`}
            </p>
            <p className={`text-justify text-sm lg:text-base`}>
              {`Our dedication to using the finest ingredients ensures a dining experience that is both sophisticated and true to its roots. Join us and enjoy a meal that honors tradition while embracing sophistication, making every visit a memorable celebration of exceptional cuisine.`}
            </p>
          </div>
          <ReuseableButton btnContent={`About Us`}/>
        </div>
      </section>
    </>
  );
};

export default FHeroBannner;
