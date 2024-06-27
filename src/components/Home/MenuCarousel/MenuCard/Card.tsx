import React from "react";
import BreakfastImg from "../../../../assets/media/images/menu-images/pexels-kyleroxas.jpg";
import BrunchImg from "../../../../assets/media/images/menu-images/pexels-geraldjakeabangan.jpg";
import LunchImg from "../../../../assets/media/images/menu-images/pexels-pixabay.jpg";
import DinnerImg from "../../../../assets/media/images/menu-images/pexels-tonyleong.jpg";

const CardData = [
  {
    id: 1,
    title: "Breakfast",
    description:
      "Collection of well prepared breakfast that suit your health needs.",
    price: 30,
    image: BreakfastImg,
    alt: "Rice Image",
  },
  {
    id: 2,
    title: "Brunch",
    description:
      "Collection of well prepared breakfast that suit your health needs.",
    price: 30,
    image: BrunchImg,
    alt: "Rice Image",
  },
  {
    id: 3,
    title: "Lunch",
    description:
      "Collection of well prepared breakfast that suit your health needs.",
    price: 30,
    image: LunchImg,
    alt: "Rice Image",
  },
  {
    id: 4,
    title: "Dinner",
    description:
      "Collection of well prepared breakfast that suit your health needs.",
    price: 30,
    image: DinnerImg,
    alt: "Rice Image",
  },
];

const Card = () => {
  return (
    <>
      <aside className={`grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-10 lg:gap-5`}>
        <section
          className={`rounded-xl shadow-xl md:w-56  relative bg-center bg-cover h-72 bg-no-repeat  bg-breakfast-img`}
        >
          <div
            className={`absolute bottom-0 p-3 backdrop-opacity-10 backdrop-invert bg-black/50 text-white rounded-br-xl rounded-bl-xl`}
          >
            <h3 className={`font-playFairBlack text-lg md:text-xl pb-2`}>Breakfast</h3>
            <p className={`font-playRegular text-xs md:text-sm`}>
              Collection of well prepared breakfast that suit your health needs.
            </p>
          </div>
          <small
            className={`rounded-full font-playFairRegular font-medium backdrop-invert bg-white/80 shadow-2xl px-2 py-1 absolute right-0 m-3`}
          >
            Price $30
          </small>
        </section>

        <section
          className={`rounded-xl shadow-xl md:w-56 relative bg-center bg-cover h-72 bg-no-repeat bg-brunch-img`}
        >
          <div
            className={`absolute bottom-0 p-3 backdrop-opacity-10 backdrop-invert bg-black/50 text-white rounded-br-xl rounded-bl-xl`}
          >
            <h3 className={`font-playFairBlack text-lg md:text-xl pb-2`}>Brunch</h3>
            <p className={`font-playRegular text-xs md:text-sm`}>
              Collection of well prepared breakfast that suit your health needs.
            </p>
          </div>
          <small
            className={`rounded-full font-playFairRegular font-medium backdrop-invert bg-white/80 shadow-2xl px-2 py-1 absolute right-0 m-3`}
          >
            Price $30
          </small>
        </section>

        <section
          className={`rounded-xl shadow-xl md:w-56 relative bg-center bg-cover h-72 bg-no-repeat  bg-launch-img`}
        >
          <div
            className={`absolute bottom-0 p-3 backdrop-opacity-10 backdrop-invert bg-black/50 text-white rounded-br-xl rounded-bl-xl`}
          >
            <h3 className={`font-playFairBlack text-lg md:text-xl pb-2`}>Launch</h3>
            <p className={`font-playRegular text-xs md:text-sm`}>
              Collection of well prepared breakfast that suit your health needs.
            </p>
          </div>
          <small
            className={`rounded-full font-playFairRegular font-medium backdrop-invert bg-white/80 shadow-2xl px-2 py-1 absolute right-0 m-3`}
          >
            Price $30
          </small>
        </section>

        <section
          className={`rounded-xl shadow-xl md:w-56 relative bg-center bg-cover h-72 bg-no-repeat  bg-dinner-img`}
        >
          <div
            className={`absolute bottom-0 p-3 backdrop-opacity-10 backdrop-invert bg-black/50 text-white rounded-br-xl rounded-bl-xl`}
          >
            <h3 className={`font-playFairBlack text-lg md:text-xl pb-2`}>Dinner</h3>
            <p className={`font-playRegular text-xs md:text-sm`}>
              Collection of well prepared breakfast that suit your health needs.
            </p>
          </div>
          <small
            className={`rounded-full font-playFairRegular font-medium backdrop-invert bg-white/80 shadow-2xl px-2 py-1 absolute right-0 m-3`}
          >
            Price $30
          </small>
        </section>
      </aside>
    </>
  );
};

export default Card;
