import Chef from "../../../assets/media/images/hero-images/pexels-elevate.jpg"

const SecHeroSection = () => {
  return (
    <section className={`grid grid-cols-2 pb-5`}>
      <div className={`text-white bg-brandBrown py-3 pl-3 pr-2 md:py-12 lg:py-32 md:pl-10 lg:pl-44 md:pr-10`}>
        <h3 className={` text-sm md:text-2xl lg:text-3xl font-CirkaBold pb-1 md:pb-3`}>Where Every Meal is An Unforgettable Experience</h3>
        <p className={`font-InterRegular text-xxs md:text-sm `}>
          Our talented chefs take pride in crafting dishes that not only
          tantalize your taste buds but also tell a story of culinary
          excellence. 
        </p>
      </div>
      <div className="">
        <img src={Chef} alt=""/>
      </div>
    </section>
  );
};

export default SecHeroSection;
