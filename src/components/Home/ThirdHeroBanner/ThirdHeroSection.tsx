import ReuseableButton from "../../Buttons/ReuseableButton";

const ThirdHeroSection = () => {
  return (
    <section
      className={`w-full h-96 bg-foodtable-img flex flex-col justify-center items-center `}
    >
      <div
        className={`backdrop-blur-sm bg-black/70 w-full h-full text-white text-center py-24 px-7`}
      >
        {" "}
        <h3 className={`font-CirkaBold  text-5xl `}>Who we are?</h3>{" "}
        <p className={`text-xs md:text-sm py-3 font-InterRegular`}>
          {
            "We are passionate about creating exceptional dining experiences that bring people together"
          }
          <br />
          {` Our team is dedicated to crafting dishes that
          blend traditional `}
          <br />
          {`flavors with modern culinary techniques,  using only the freshest ingredients.`}
        </p>
      <ReuseableButton btnContent={`Explore Our Services`}/>
      </div>
    </section>
  );
};

export default ThirdHeroSection;
