import React from "react";
import HeroSlider from "../components/HeroSlider";
import homeData from "../data/homeData";
import Categories from "../components/Categories";
import BrandsSlider from "../components/BrandsSlider";
import StyleOffers from "../components/StyleOffers";

export default function Home() {
  return (
    <div className="home-page">
      
      <section className="w-full">
        <HeroSlider slides={homeData.heroSlides} />
      </section>

       <StyleOffers />

      <Categories />

      <BrandsSlider />
      
    </div>
  );
}
