import { date } from "zod";
import FHeroBannner from "./components/Home/FirstHeroBanner/FHeroBannner";
import MenuCard from "./components/Home/MenuCarousel/MenuCard";
import Card from "./components/Home/MenuCarousel/MenuCard/Card";
import OrderForm from "./components/Home/OrderForm/OrderForm";
import SecHeroSection from "./components/Home/SecHeroBanner/SecHeroSection";
import CusTestimonial from "./components/Home/TestimonialCarousel/CusTestimonial";
import HeroBanner from "./components/Home/TopHeroSection/HeroBanner/HeroBanner";
import ThirdHeroSection from "./components/Home/ThirdHeroBanner/ThirdHeroSection";
import ImgGrid from "./components/Home/InstaCarousel/ImgGrid";

function App() {
  return (
    <>
      <HeroBanner />
      <FHeroBannner />
      <MenuCard />
      <SecHeroSection />
      <CusTestimonial />
      <OrderForm
        onSubmit={() => {
          console.log("Form has been submitted");
        }}
      />
      <ThirdHeroSection />
      <ImgGrid/>
    </>
  );
}

export default App;
