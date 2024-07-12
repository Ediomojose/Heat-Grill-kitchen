import Card from "./MenuCard/Card";

const MenuCard = () => {
  return (
    <>
      <section className={` px-5 md:px-48 py-16`}>
        <div className={`py-4 md:py-8 flex flex-col gap-3 justify-center items-center`}>
          <h2 className={` text-3xl md:text-5xl font-CirkaBold text-brandBrown drop-shadow-2xl`}>Our Menu</h2>
          <p className={`text-center text-base md:text-lg font-InterRegular`}>
            {`We offer well prepared variety of delicacies, `}
            <br />
            {`our menu are crafted with excellence having your satisfaction as top priority`}
          </p>
        </div>
        <Card />
      </section>
    </>
  );
};

export default MenuCard;
