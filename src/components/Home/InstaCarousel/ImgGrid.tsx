import InstaImg_1 from "../../../assets/media/images/insta-images/asparagus.jpg";
import InstaImg_2 from "../../../assets/media/images/insta-images/food-perfit.jpg";
import InstaImg_3 from "../../../assets/media/images/insta-images/food-rice.jpg";
import InstaImg_4 from "../../../assets/media/images/insta-images/food.jpg";
import InstaImg_5 from "../../../assets/media/images/insta-images/hamburger.jpg";


const ImgGrid = () => {
  return (
    <>
    <section className={`grid grid-cols-3 justify-center items-center gap-2 md:gap-5 px-5 md:w-1/2 mx-auto pt-5 pb-10`}>
      <div className={`flex flex-col gap-2 md:gap-5`}>
        <img src={InstaImg_1} alt="" className={`rounded-lg shadow-xl`}/>
        <img src={InstaImg_3} alt="" className={`rounded-lg shadow-xl`}/>
      </div>
      <div className="">
        <img src={InstaImg_2} alt="" className={`rounded-lg shadow-xl`}/>
      </div>
      <div className={`flex flex-col gap-2 md:gap-5`}>
        <img src={InstaImg_4} alt="" className={`rounded-lg shadow-xl`}/>
        <img src={InstaImg_5} alt="" className={`rounded-lg shadow-xl`}/>
      </div>
    </section>
    </>
  );
};

export default ImgGrid;
