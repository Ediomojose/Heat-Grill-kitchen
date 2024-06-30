import React from "react";
import imgCusOne from "../../../assets/media/images/user-images/2.jpg";
import imgCusTwo from "../../../assets/media/images/user-images/30.jpg";
import imgCusThree from "../../../assets/media/images/user-images/62.jpg";
import imgCusFour from "../../../assets/media/images/user-images/69.jpg";
import imgCusFive from "../../../assets/media/images/user-images/70.jpg";
import imgCusSix from "../../../assets/media/images/user-images/77.jpg";

const CustomerData = [
  {
    id: 1,
    name: "Emily Ricardo",
    review:
      "Absolutely amazing food and fantastic service! Every dish was bursting with flavor, and the staff made us feel so welcome. A must-visit for any food lover.",
    image: imgCusOne,
    country: "Rio, Brazil",
  },

  {
    id: 2,
    name: "James Udoka",
    review:
      "Every dish was a delight. The ambiance made our evening truly special. It's rare to find a place where the food, service, and atmosphere all exceed expectations.",
    image: imgCusTwo,
    country: "Lagos, Nigeria",
  },

  {
    id: 3,
    name: "Sophia Lookman",
    review:
      "The flavors were incredible, and the presentation was top-notch. From the appetizers to the desserts, everything was perfect. Highly recommend!",
    image: imgCusThree,
    country: "London, UK",
  },

  {
    id: 4,
    name: "Olivia Tom",
    review:
      "Best dining experience I've had in a long time. The staff was attentive, and the food was cooked to perfection. Will definitely be coming back!",
    image: imgCusFour,
    country: "New York, USA",
  },

  {
    id: 5,
    name: "Michael Mensah",
    review:
      "Exceptional cuisine and wonderful staff. The attention to detail in both the food and the service was impressive. A perfect place for any occasion.",
    image: imgCusFive,
    country: "Accra, Ghana",
  },

  {
    id: 6,
    name: "Liam Yusuf",
    review:
      "From start to finish, everything was perfect. The atmosphere was cozy, the food was delicious, and the service was impeccable. An unforgettable meal!",
    image: imgCusSix,
    country: "Dubai, UAE",
  },
];

const CusTestimonial = () => {
  return (
    <>
    
        <article className={`flex items-center  py-4 mx-5   gap-3 overflow-x-scroll snap-mandatory snap-x no-scrollbar lg:px-20 lg:mx-20"`}>
          {CustomerData.map((data) => (
            <div
              className={`grid grid-cols-1 justify-center items-center w-full  shrink-0   bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl md:w-2/5 h-56`}
              key={data.id}
            >
              <p className={`test-sm`}>{data.review}</p>
              <div className={`flex gap-3 items-center`}>
                <img
                  src={data.image}
                  alt=""
                  className={`rounded-full w-10 h-10`}
                />
                <div className="">
                  <p className={`font-playFairBlack text-sm`}>{data.name}</p>
                  <p className="">{data.country}</p>
                </div>
              </div>
            </div>
          ))}
        </article>
    </>
  );
};

export default CusTestimonial;
