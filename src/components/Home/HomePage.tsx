import React, { useLayoutEffect, useRef } from "react";
import Template from "../Widget/Template";
import HeroBanner from "./TopHeroSection/HeroBanner/HeroBanner";
import FHeroBannner from "./FirstHeroBanner/FHeroBannner";
import MenuCard from "./MenuCarousel/MenuCard";
import SecHeroSection from "./SecHeroBanner/SecHeroSection";
import CusTestimonial from "./TestimonialCarousel/CusTestimonial";
import OrderForm from "./OrderForm/OrderForm";
import ThirdHeroSection from "./ThirdHeroBanner/ThirdHeroSection";
import ImgGrid from "./InstaCarousel/ImgGrid";
import { motion } from "framer-motion";
import SmoothScroll from "../SmoothScroll/SmoothScroll";

const HomePage = () => {
  return (
    <>
      <Template>
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
        <ImgGrid />
      </Template>
    </>
  );
};

export default HomePage;
